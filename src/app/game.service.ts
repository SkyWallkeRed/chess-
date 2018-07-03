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
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GameService {
public roomsArray: Array<any>;
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

  public currentTurn;
  public myColor;
  public isMultiplayer: boolean;
  public gameId: string;
  public gameOver: boolean;

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
  public gameIdObservable: Observable<any>;
  public gameIdSubject: Subject<any>;
  public gameOverObservable: Observable<any>;
  public gameOverSubject: Subject<any>;
  // END ANIMATION BOOLS

  constructor(private gameSocket: GameSocketService, private http: HttpClient) {
    this.gameIdSubject = new Subject<any>();
    this.gameIdObservable = this.gameIdSubject.asObservable();

    this.killSubject = new Subject<any>();
    this.killObservable = this.killSubject.asObservable();

    this.boardSubject = new Subject<any>();
    this.boardObservable = this.boardSubject.asObservable();

    this.optionsSubject = new Subject<any>();
    this.optionsObservable = this.optionsSubject.asObservable();

    this.deadSubject = new Subject<any>();
    this.deadObservable = this.deadSubject.asObservable();



    this.gameOverSubject = new Subject<any>();
    this.gameOverObservable = this.gameOverSubject.asObservable();

    this.startGame();

    this.gameSocket.rooms.subscribe((room) => {
      const parsedRoom = JSON.parse(room);
      this.gameId = parsedRoom.text;
      this.gameIdSubject.next(this.gameId);
    });
    this.gameSocket.messages.subscribe((stringifiedMove) => {
      const move = JSON.parse(stringifiedMove);
      if (move.gameId == this.gameId) {
        this.myColor = move.myColor;
        this.clickedPiece = move.piece;
        this.catchOption(move.x, move.y);
        // this.boardSubject.next(this.boardArray);
        this.currentTurn = move.turn;
      }
    });

    this.Kb = new King('king', 'black');
    this.Qb = new Queen('queen', 'black');
    this.Kw = new King('king', 'white');
    this.Qw = new Queen('queen', 'white');

  }
  startGame() {
    this.boardArray = [

      // tslint:disable-next-line:max-line-length
      [new Rook('rook', 'black'), new Knight('knight', 'black'), new Bishop('bishop', 'black'), this.Qb, this.Kb, new Bishop('bishop', 'black'), new Knight('knight', 'black'), new Rook('rook', 'black')],
      // tslint:disable-next-line:max-line-length
      [new Pawn('pawn', 'black'), new Pawn('pawn', 'black'), new Pawn('pawn', 'black'), new Pawn('pawn', 'black'), new Pawn('pawn', 'black'), new Pawn('pawn', 'black'), new Pawn('pawn', 'black'), new Pawn('pawn', 'black')],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      // tslint:disable-next-line:max-line-length
      [new Pawn('pawn', 'white'), new Pawn('pawn', 'white'), new Pawn('pawn', 'white'), new Pawn('pawn', 'white'), new Pawn('pawn', 'white'), new Pawn('pawn', 'white'), new Pawn('pawn', 'white'), new Pawn('pawn', 'white')],
      // tslint:disable-next-line:max-line-length
      [new Rook('rook', 'white'), new Knight('knight', 'white'), new Bishop('bishop', 'white'), this.Qw, this.Kw, new Bishop('bishop', 'white'), new Knight('knight', 'white'), new Rook('rook', 'white')]

    ];
    this.currentTurn = 'white';
    this.myColor = 'white';
    this.gameOver = false;
    this.gameOverSubject.next(this.gameOver);
    this.deadArray = [];
    this.deadSubject.next(this.deadArray);
    this.optionsArray = [];
    this.optionsSubject.next(this.optionsArray);
    this.roomsArray = []
    this.boardSubject.next(this.boardArray);
  }
  makeMultiplayer(boolean) {
    if (boolean) {
      this.isMultiplayer = true;

    } else {
      this.isMultiplayer = false;
    }
  }
  createRoom(text) {
    this.gameSocket.makeRoom({ text: text });
  }
  sendMsg(x, y) {
    if (this.isMultiplayer) {
      if (this.myColor == 'white') {
        this.gameSocket.sendMsg({ x: x, y: y, piece: this.clickedPiece, turn: this.currentTurn, myColor: 'black', gameId: this.gameId });
        return;
      }
      this.gameSocket.sendMsg({ x: x, y: y, piece: this.clickedPiece, turn: this.currentTurn, myColor: 'white', gameId: this.gameId });
    }
  }
  catchOption(x, y) {
    if (this.clickedPiece) {
      if (this.boardArray[y][x]) {
        this.deadArray.push(this.boardArray[y][x]);
        this.kill = true; // ANIMATION.
        this.killSubject.next(this.kill); // ANIMATION
        if (this.boardArray[y][x].type == 'king') {
          this.gameOver = true;
          this.gameOverSubject.next(this.gameOver);
        } else {
          this.deadSubject.next(this.deadArray);
          this.boardArray[y][x] = this.clickedPiece.myPiece;
          this.boardArray[this.clickedPiece.myY][this.clickedPiece.myX] = null;
        }
      } else {
        this.boardArray[y][x] = this.clickedPiece.myPiece;
        this.boardArray[this.clickedPiece.myY][this.clickedPiece.myX] = null;
      }
    }
    this.switchTurns();
    // this.clickedPiece = null;
    this.optionsArray.length = 0; // ANIMATION
    this.optionsSubject.next([]); // ANIMATION

    this.http.post<any>('/api', { game_id: this.gameId, boardArray: this.boardArray }).subscribe((data1) =>  {

    })
    this.http.get<any>('/api').subscribe((data) => {
    for (let i = 0; i < data.length; i++){
      if(!this.roomsArray.includes(data[i].game_id)){
        this.roomsArray.push(data[i].game_id)
      }
    }
    console.log(this.roomsArray)
      console.log("get is " + data[0].game_id)
      })
 

  }
  getPieceFromBoard(x, y) {
    if (this.boardArray[y]) {
      return this.boardArray[y][x];
    }
  }
  switchTurns() {
    if (this.currentTurn == 'white') {
      this.currentTurn = 'black';
    } else if (this.currentTurn == 'black') {
      this.currentTurn = 'white';
    }
  }

  getOptions(x, y, piece) {

    if (!this.deadArray.includes(piece) && piece.color == this.currentTurn) {
      // if( piece.color == this.currentTurn){
      this.clickedPiece = { myX: x, myY: y, myPiece: piece };
      this.optionsArray.length = 0;
      if (this.clickedPiece.myPiece.color == this.myColor && this.isMultiplayer) {
        this.optionsArray = piece.moveOptions(x, y, this) || [];
        this.optionsSubject.next(this.optionsArray);
        // console.log(this.optionsArray);
        // console.log(x, y);

      } else if (!this.isMultiplayer) {
        this.optionsArray = piece.moveOptions(x, y, this) || [];
        this.optionsSubject.next(this.optionsArray);
      }
    }
  }
  getGameId() {
    return this.gameId;
  }

}

const eColors = {
  black: 0,
  white: 1
};

const eTypes = {
  knight: 0,
  king: 1
};


