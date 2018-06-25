import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Pawn extends Piece {
    // private white ;
    constructor(type, color) {

        super();
        this.color = color;


        this.type = type;
        this.b = 'https://cdn4.iconfinder.com/data/icons/chess-icons/200/chess_black_pawn-512.png';
        this.w = 'http://icons.iconarchive.com/icons/icons-land/vista-chess/128/Pawn-Yellow-icon.png';
        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
        // console.log(this.imgUrl);
        // this.moveOptions = this.moveOptions()
    }

    // moveOptions(myX, myY) {
    //     if (myY == 2) {
    //         // return this.gameService.optionsArray.push({myX, myY + 1}, {myX, myY + 2})
    //     }
    //     else if (myY - 1 >= 0) {
    //         // return this.gameService.optionsArray.push({myX, myY + 1})
    //     }

    // }
}
