import { Injectable } from '@angular/core';

import { Pawn } from './model/pawn';
import { Rook } from './model/rook';
import { Knight } from './model/knight';
import { King } from './model/king';
import { Bishop } from './model/bishop';
import { Queen } from './model/queen';
import { Piece } from './model/base-piece';
import { Observable, Subject } from 'rxjs';


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
  constructor() {
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
    this.getData();
    this.Nb = new Knight('knight', 'black', this);
    this.Rb = new Rook('rook', 'black', this);
    this.Kb = new King('king', 'black', this);
    this.Bb = new Bishop('bishop', 'black', this);
    this.Qb = new Queen('queen', 'black', this);
    this.Pb = new Pawn('pawn', 'black', this);
    this.Nw = new Knight('knight', 'white', this);
    this.Rw = new Rook('rook', 'white', this);
    this.Kw = new King('king', 'white', this);
    this.Bw = new Bishop('bishop', 'white', this);
    this.Qw = new Queen('queen', 'white', this);
    this.Pw = new Pawn('pawn', 'white', this);
  }
  getData() {
    this.boardArray = [

      [this.Rb, this.Nb, this.Bb, this.Qb, this.Kb, this.Bb, this.Nb, this.Rb],
      [this.Pb, this.Pb, this.Pb, this.Pb, this.Pb, this.Pb, this.Pb, this.Pb],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [this.Pw, this.Pw, this.Pw, this.Pw, this.Pw, this.Pw, this.Pw, this.Pw],
      [this.Rw, this.Nw, this.Bw, this.Qw, this.Kw, this.Bw, this.Nw, this.Rw]

    ];
    this.boardSubject.next(this.boardArray);
  }
  catchOption(x, y) {
    if (this.clickedPiece) {
      if (this.boardArray[y][x]) {
        this.deadArray.push(this.boardArray[y][x]);
        this.kill = true; // ANIMATION.
        this.killSubject.next(this.kill); // ANIMATION
        console.log(this.kill);
        this.deadSubject.next(this.deadArray);
        this.boardArray[y][x] = this.clickedPiece.myPiece;

        this.boardArray[this.clickedPiece.myY][this.clickedPiece.myX] = null;
      } else {
        this.boardArray[y][x] = this.clickedPiece.myPiece;
        this.boardArray[this.clickedPiece.myY][this.clickedPiece.myX] = null;
      }
    }
    this.clickedPiece = null;
    this.optionsArray.length = 0; // ANIMATION
    this.optionsSubject.next([]); // ANIMATION

  }
  getPieceFromBoard(x, y) {
    if (this.boardArray[y]) {
      return this.boardArray[y][x];
    }
  }

  getOptions(x, y, piece) {
    this.clickedPiece = { myX: x, myY: y, myPiece: piece };
    this.optionsArray.length = 0;
    this.optionsArray = piece.moveOptions(x, y) || [];
    this.optionsSubject.next(this.optionsArray);
    // console.log(this.optionsArray);
    // console.log(x, y);

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


