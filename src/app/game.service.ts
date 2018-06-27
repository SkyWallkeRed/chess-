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
  public clickedPiece
  public whiteKingPosition
  public blackKingPosition
  // public unfilterdOptionsArray
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

    this.deadSubject = new Subject<any>();
    this.deadObservable = this.deadSubject.asObservable();
    this.deadArray = [];
    this.blackKingPosition = {myY : 0, myX : 4};
    this.whiteKingPosition = {myY : 5, myX : 4};
    // this.unfilterdOptionsArray = []
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
      [null, this.Bb, null, null, null, null, null, this.Bb],
      [null, null, null, null, null, null, null, null],
      [null, null, null, this.Bw, null, this.Pw, null, null],
      [null, null, null, null, this.Kw, null, null, null],
      [this.Pw, this.Pw, this.Pw, this.Pw, this.Pw, this.Pw, this.Pw, this.Pw],
      [this.Rw, this.Nw, this.Bw, this.Qw, null, this.Bw, this.Nw, this.Rw]

    ];
    this.boardSubject.next(this.boardArray);
  }
  catchOption(x, y) {
    if(this.clickedPiece){
      if(this.boardArray[y][x]){
        this.deadArray.push(this.boardArray[y][x])
        this.boardArray[y][x] = this.clickedPiece.myPiece
        this.boardArray[this.clickedPiece.myY][this.clickedPiece.myX] = null
        if(this.clickedPiece.myPiece.type == "king"){
          this.updateKingsPosition(x, y, this.clickedPiece)
        }
      }
      else{
        this.boardArray[y][x] = this.clickedPiece.myPiece
        this.boardArray[this.clickedPiece.myY][this.clickedPiece.myX] = null
        if(this.clickedPiece.myPiece.type == "king"){
          this.updateKingsPosition(x, y, this.clickedPiece)
        }
      }
    }
    this.clickedPiece = null
  }
  getPieceFromBoard(x, y) {
    if(this.boardArray[y]){
      return this.boardArray[y][x]
    }
  }
  updateKingsPosition(x, y, king){
    if(king.color == "white"){
      this.whiteKingPosition = {myY : y, myX : x}
    }
    else{
      this.blackKingPosition = {myY : y, myX : x}      
    }
  }

  getOptions(x, y, piece) {
    debugger
    this.clickedPiece = {myX : x, myY : y, myPiece : piece}
    this.optionsArray.length = 0
    this.optionsArray = piece.moveOptions(x, y) || []
    let illegalMoves = this.validateOptions(x, y, piece) || []
    if(illegalMoves.length > 0){
      // for(let index =0; index < illegalMoves.length; index++){
      //   if (illegalMoves[index].myX == this.clickedPiece.myX && illegalMoves[index].myY == this.clickedPiece.myY){
      // }
      // for(let index =0; index < illegalMoves.length; index++){
      //   if (illegalMoves[index].myX == this.clickedPiece.myX && illegalMoves[index].myY == this.clickedPiece.myY){
      //     this.optionsArray.length = 0
      //   }
      // }
      for(let i=0; i<this.optionsArray.length; i++){
        for(let j=0; j<illegalMoves.length; j++){
          if(this.optionsArray[i] && this.optionsArray[i].myX !== illegalMoves[j].myX && this.optionsArray[i].myY !== illegalMoves[j].myY ){
            this.optionsArray.splice(1, i)
          }
        }
      }
    }

    this.optionsSubject.next(this.optionsArray)
    console.log(this.optionsArray)
    console.log(x, y)
    return this.optionsArray
  }
  getUnfilteredOptions(x, y, piece){
    let filterdOptionsArray = piece.unfilteredMoveOptions(x, y) || []    
    return filterdOptionsArray
  }
  getFilteredOptions(x, y, piece){
    let filterdOptionsArray = piece.moveOptions(x, y) || []    
    return filterdOptionsArray
  }
  checkMate(x, y, piece){
    let enemyOptions = this.getUnfilteredEnemyOptions(piece)
    let kingsOptions = this.getKingsOptions()
    let illegalMoves = []
    for (let i=0; i<enemyOptions.length; i++){
      for (let j=0; j<kingsOptions.length; j++){
        if(kingsOptions[j].myX === enemyOptions[i].myX && kingsOptions[j].myY === enemyOptions[i].myY){
          illegalMoves.push()
        }
      }
    }

  }

  validateOptions(x, y, piece){
    let myTeamsOptions = this.getFilteredOptions(x, y, piece)
    let unfilteredEnemiesOptions = this.getUnfilteredEnemyOptions(piece)
    let filteredEnemiesOptions = []    
    let legalMoves = []
    let tempArr = []
    for (let i=0; i<unfilteredEnemiesOptions.length; i++){
        if(this.whiteKingPosition.myX === unfilteredEnemiesOptions[i].myX && this.whiteKingPosition.myY === unfilteredEnemiesOptions[i].myY){
        filteredEnemiesOptions = filteredEnemiesOptions.concat(this.getFilteredEnemyOptions(unfilteredEnemiesOptions[i])) 
        filteredEnemiesOptions.push({myX : unfilteredEnemiesOptions[i].myX, myY : unfilteredEnemiesOptions[i].myY})         
          for(let j = 0; j<filteredEnemiesOptions.length; j++){
            for (let index = 0; index < myTeamsOptions.length; index++){
              if(myTeamsOptions[index] && filteredEnemiesOptions[j].myX == myTeamsOptions[index].myX && filteredEnemiesOptions[j].myY == myTeamsOptions[index].myY ){
                legalMoves.push(filteredEnemiesOptions[j])
                console.log(unfilteredEnemiesOptions[i])
                legalMoves.push(unfilteredEnemiesOptions[i])
                // legalMoves = legalMoves.concat(tempArr)
              }
            }
            // if(filteredEnemiesOptions[j].myX === unfilteredEnemiesOptions[i].myX && filteredEnemiesOptions[j].myY === unfilteredEnemiesOptions[i].myY){
              // tempArr.push(filteredEnemiesOptions[j])
              // legalMoves = legalMoves.concat(tempArr)
            // }
          }
          //compare to filteredOptions
          //SUBTRACK THE FILTERED FROM THE UNFILTERED AND THE REMAINING IS THE LEAGAL MOVES!!!!
          //IF THE UNFILTERED ARAY INCLUDES THE KNG SO ONLY THE FILTERED ARRAY = THE LEGAL MOVES
        }
      }
      console.log('legal moves:')
      console.log(legalMoves)
      return legalMoves
    }

  
  getUnfilteredEnemyOptions(piece){
    // debugger
    let enemiesOptions = []
    for(let y=0; y<this.boardArray.length; y++){
      for(let x =0; x<this.boardArray[y].length; x++){
          if(this.boardArray[y][x] && this.boardArray[y][x].color !== piece.color){
            enemiesOptions = enemiesOptions.concat(this.getUnfilteredOptions(x, y, this.boardArray[y][x]))
          }
      }
    }
    return enemiesOptions
  }
  getFilteredEnemyOptions(piece){
    // debugger
    let enemiesOptions = []
    for(let y=0; y<this.boardArray.length; y++){
      for(let x =0; x<this.boardArray[y].length; x++){
          if(this.boardArray[y][x] && this.boardArray[y][x].color !== piece.color){
            enemiesOptions = enemiesOptions.concat(this.getFilteredOptions(x, y, this.boardArray[y][x]))
          }
      }
    }
    return enemiesOptions
  }
  getMyTeamsOptions(piece){
    // debugger
    let myTeamsOptions = []
    for(let y=0; y<this.boardArray.length; y++){
      for(let x =0; x<this.boardArray[y].length; x++){
          if(this.boardArray[y][x] && this.boardArray[y][x].color == piece.color){
            myTeamsOptions = myTeamsOptions.concat(this.getFilteredOptions(x, y, this.boardArray[y][x]))
          }
      }
    }
    return myTeamsOptions
  }
  getKingsOptions(){
    let kingsOptions = []
    kingsOptions = kingsOptions.concat(this.getOptions(this.whiteKingPosition.myX, this.whiteKingPosition.myY, this.boardArray[this.whiteKingPosition.myY][this.whiteKingPosition.myX]))
    return kingsOptions
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


