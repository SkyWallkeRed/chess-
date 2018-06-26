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

        let tempArr = []
        let optionsArr = []
       
        if (this.gameService.getPieceFromBoard(myX - 1, myY - 1) && this.gameService.getPieceFromBoard(myX - 1, myY - 1).color !== this.color) {
            optionsArr = optionsArr.concat(this.run(-1, -1, myX, myY))
        }
        if (this.gameService.getPieceFromBoard(myX + 1, myY - 1) && this.gameService.getPieceFromBoard(myX + 1, myY - 1).color !== this.color) {
            optionsArr = optionsArr.concat(this.run(1, -1, myX, myY))
        }

        optionsArr = optionsArr.concat(this.run(0, -1, myX, myY))
        if (myY == 6) {
            optionsArr = optionsArr.concat(this.run(0, -2, myX, myY))
        }


        return optionsArr
    }

}
