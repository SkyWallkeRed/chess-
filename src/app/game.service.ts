import { Injectable } from '@angular/core';
import {Pawn} from '..model/pawn';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  public N = new Knight();
  R = new Rook(); 
  K = new King();
  B = new Bishop();
  Q = new Queen();
 public P = new Pawn();
  public BoardArray: Array<any> = [
    [{R,b}, {N,b}, {B,b}, {Q,b}, {K, b}, {B,b}, {N, b}, {R, b}],
    [{P, b}, {P, b}, {P, b}, {P, b}, {P, b}, {P, b}, {P, b},{P, b}],
    [{},{}, {},{},{},{},{},{}],
    [{},{}, {},{},{},{},{},{}],
    [{},{}, {},{},{},{},{},{}],
    [{},{}, {},{},{},{},{},{}],
    [{P, w}, {P, w}, {P, w}, {P, w}, {P, w}, {P, w}, {P, w},{P, w}],
    [{R,w}, {N,w}, {B,w}, {Q,w}, {K,w}, {B,w}, {N, w}, {R, w}]
    ]

  constructor() { }
}
