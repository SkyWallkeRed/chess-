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


  constructor() {
    this.boardSubject = new Subject<any>();
    this.boardObservable = this.boardSubject.asObservable();


    this.getData();
  }
  getData() {
    this.boardArray = [
      [Rb, Nb, Bb, Qb, Kb, Bb, Nb, Rb],
      [Pb, Pb, Pb, Pb, Pb, Pb, Pb, Pb],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [Pw, Pw, Pw, Pw, Pw, Pw, Pw, Pw],
      [Rw, Nw, Bw, Qw, Kw, Bw, Nw, Rw]
    ];
    this.boardSubject.next(this.boardArray);
  }


}

const Nb = new Knight('knight', 'black');
const Rb = new Rook('rook', 'black');
Rb.type = 'rook';
const Kb = new King('king', 'black');
const Bb = new Bishop('bishop', 'black');
const Qb = new Queen('queen', 'black');
const Pb = new Pawn('pawn', 'black');
const Nw = new Knight('knight', 'white');
const Rw = new Rook('rook', 'white');
const Kw = new King('king', 'white');
const Bw = new Bishop('bishop', 'white');
const Qw = new Queen('queen', 'white');
const Pw = new Pawn('pawn', 'white');
