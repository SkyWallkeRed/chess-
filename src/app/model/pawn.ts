import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Pawn extends Piece {
    // private white ;
    constructor(type, color, gameService) {

        super(type, color, gameService);
        this.color = color;


        this.type = type;
        this.b = '../../assets/pieces_B/Pawn-Yellow-icon-75.png';
        this.w = '../../assets/pieces_Y/Pawn-Yellow-icon.png';
        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
        // console.log(this.imgUrl);
        // this.moveOptions = this.moveOptions()
    }
    moveOptions(myX, myY) {
        const arr = [];
        const optionsArr = arr.concat(this.run(0, -1, myX, myY));
        if (myY == 6) {
            arr.concat(this.run(0, -2, myX, myY));
        }
        return optionsArr;
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
