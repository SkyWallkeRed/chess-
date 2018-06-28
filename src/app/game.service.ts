import { Injectable } from '@angular/core';

import { Pawn } from './model/pawn';
import { Rook } from './model/rook';
import { Knight } from './model/knight';
import { King } from './model/king';
import { Bishop } from './model/bishop';
import { Queen } from './model/queen';
import { Piece } from './model/base-piece';
import { Observable, Subject } from 'rxjs';
import { GameSocketService } from './game-socket.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  public boardArray: Array<any>;
  public boardObservable: Observable<any>;
  public boardSubject: Subject<any>;
  public optionsArray: Array<any>;
  public optionsObservable: Observable<any>;
  public optionsSubject: Subject<any>;
  public deadArray: Array<any>;
  public deadObservable: Observable<any>;
  public deadSubject: Subject<any>;
  public clickedPiece;
  public currentTurn
  public Nb;
  public Rb;
  public Kb;
  public Bb;
  public Qb;
  public Pb;
  public Nw;
  public Rw;
  public Kw;
  public Bw;
  public Qw;
  public Pw;
  // ANIMATION BOOLS
  public kill = false;
  public killObservable: Observable<any>;
  public killSubject: Subject<any>;
// END ANIMATION BOOLS
  constructor(private gameSocket : GameSocketService) {
    this.killSubject = new Subject<any>();
    this.killObservable = this.killSubject.asObservable();

    this.boardSubject = new Subject<any>();
    this.boardObservable = this.boardSubject.asObservable();

    this.optionsSubject = new Subject<any>();
    this.optionsObservable = this.optionsSubject.asObservable();
    this.optionsArray = [];

    this.deadSubject = new Subject<any>();
    this.deadObservable = this.deadSubject.asObservable();
    this.deadArray = [];
    this.currentTurn = 'white'
    this.getData();
    // this.Nb = new Knight('knight', 'black', this);
    // this.Rb = new Rook('rook', 'black', this);
    this.Kb = new King('king', 'black', this);
    // this.Bb = new Bishop('bishop', 'black', this);
    this.Qb = new Queen('queen', 'black', this);
    // this.Pb = new Pawn('pawn', 'black', this);
    // this.Nw = new Knight('knight', 'white', this);
    // this.Rw = new Rook('rook', 'white', this);
    this.Kw = new King('king', 'white', this);
    // this.Bw = new Bishop('bishop', 'white', this);
    this.Qw = new Queen('queen', 'white', this);
    // this.Pw = new Pawn('pawn', 'white', this);
  }
  getData() {
    this.boardArray = [

      [new Rook('rook', 'black', this), new Knight('knight', 'black', this), new Bishop('bishop', 'black', this), this.Qb, this.Kb, new Bishop('bishop', 'black', this), new Knight('knight', 'black', this), new Rook('rook', 'black', this)],
      [new Pawn('pawn', 'black', this), new Pawn('pawn', 'black', this),  new Pawn('pawn', 'black', this), new Pawn('pawn', 'black', this), new Pawn('pawn', 'black', this), new Pawn('pawn', 'black', this), new Pawn('pawn', 'black', this), new Pawn('pawn', 'black', this)],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [new Pawn('pawn', 'white', this), new Pawn('pawn', 'white', this), new Pawn('pawn', 'white', this), new Pawn('pawn', 'white', this), new Pawn('pawn', 'white', this), new Pawn('pawn', 'white', this), new Pawn('pawn', 'white', this), new Pawn('pawn', 'white', this)],
      [new Rook('rook', 'white', this), new Knight('knight', 'white', this), new Bishop('bishop', 'white', this), this.Qw, this.Kw, new Bishop('bishop', 'white', this), new Knight('knight', 'white', this), new Rook('rook', 'white', this)]

    ];
    this.boardSubject.next(this.boardArray);
  }
  sendMsg(){
    let piece = JSON.stringify(this.clickedPiece)
    this.gameSocket.sendMsg({piece : piece})
  }
  catchOption(x, y) {
    if (this.clickedPiece) {
      if (this.boardArray[y][x]) {
        this.deadArray.push(this.boardArray[y][x]);
        console.log(this.deadArray);
        this.kill = true;
        this.killSubject.next(this.kill); // ANIMATION
        this.deadSubject.next(this.deadArray);
        this.boardArray[y][x] = this.clickedPiece.myPiece;

        this.boardArray[this.clickedPiece.myY][this.clickedPiece.myX] = null;
      } else {
        this.boardArray[y][x] = this.clickedPiece.myPiece;
        this.boardArray[this.clickedPiece.myY][this.clickedPiece.myX] = null;
      }
    }
    this.switchTurns()    
    // this.clickedPiece = null;
    this.optionsArray.length = 0; // ANIMATION
    this.optionsSubject.next([]); // ANIMATION
    this.sendMsg()
  }
  getPieceFromBoard(x, y) {
    if (this.boardArray[y]) {
      return this.boardArray[y][x];
    }
  }
  switchTurns(){
    if(this.currentTurn == 'white'){
      this.currentTurn = 'black';
    } else if(this.currentTurn == 'black'){
      this.currentTurn = 'white'
    }
  }

  getOptions(x, y, piece) {
    if(!this.deadArray.includes(piece) && piece.color == this.currentTurn){
    // if( piece.color == this.currentTurn){
    this.clickedPiece = { myX: x, myY: y, myPiece: piece };
    this.optionsArray.length = 0;
    this.optionsArray = piece.moveOptions(x, y) || [];
    this.optionsSubject.next(this.optionsArray);
    // console.log(this.optionsArray);
    // console.log(x, y);
    }
  }
// }

}

const eColors = {
  black: 0,
  white: 1
};

const eTypes = {
  knight: 0,
  king: 1
};


