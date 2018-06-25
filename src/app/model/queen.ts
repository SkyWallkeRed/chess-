import {Piece} from './base-piece';
import { GameService } from '../game.service';

export class Queen extends Piece {
    constructor(type, color){
        super();
        this.type = type;
        this.color = color;
    }
}