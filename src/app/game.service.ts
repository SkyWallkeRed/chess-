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
  public Nb
  public Rb
  public Kb
  public Bb
  public Qb
  public Pb
  public Nw
  public Rw
  public Kw
  public Bw
  public Qw
  public Pw

  constructor() {
    this.boardSubject = new Subject<any>();
    this.boardObservable = this.boardSubject.asObservable();

    this.optionsSubject = new Subject<any>();
    this.optionsObservable = this.optionsSubject.asObservable();
    this.optionsArray = [];
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
      [null, null, null, this.Kw, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [this.Rw, this.Pw, this.Rw, this.Pw, this.Pw, this.Pw, this.Pw, this.Pw],
      [this.Rw, this.Nw, this.Bw, this.Qw, this.Kw, this.Bw, this.Nw, this.Rw]

    ];
    this.boardSubject.next(this.boardArray);
  }
  cetchOption(x, y) {
    console.log(x, y);
  }
  getPieceFromBoard(x, y) {
    if(this.boardArray[y]){
      return this.boardArray[y][x]
    }
  }

  getOptions(x, y, piece) {
    this.optionsArray.length = 0
    this.optionsArray = piece.moveOptions(x, y) || []
    // if (piece.type == "pawn") {
    //   this.pawnNoCollide(piece)
    // }
    this.optionsSubject.next(this.optionsArray)
    console.log(this.optionsArray)
    console.log(x, y)


    // console.log(this.boardArray) 

    // this.deadArray.push(this.boardArray[y-2][x-1])

    // this.boardArray[y-2][x-1]=piece


    // this.boardArray[y-1][x-1] = null
    // console.log(piece)
    // console.log(this.boardArray)
    // this.boardArray[y-1][x-1].splice(0, 1)

  }
  pawnNoCollide(piece) {
    for (let i = 0; i < this.optionsArray.length; i++) {
      let position = this.boardArray[this.optionsArray[i].myY][this.optionsArray[i].myX]
      if (position) {
        if (position.color == piece.color) {
          debugger
          this.optionsArray.splice(i, 1)
        }
      }
    }
  }

}

const eColors = {
  black: 0,
  white: 1
}

const eTypes = {
  knight: 0,
  king: 1
}


