import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Knight extends Piece {
    constructor(type, color) {
        super(type, color);
        this.type = type;
        this.color = color;

        this.b = '../../assets/pieces_B/Knight-Yellow-icon-75.png';
        this.w = '../../assets/pieces_Y/Knight-Yellow-icon.png';

        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
    }

    run(xMovment, yMovment, currX, currY, gameService) {
        let options = [];
        let currPiece;
      
            for (let i = 0; i < 1; i++) {
                currX += xMovment;
                currY += yMovment;

                currPiece = gameService.getPieceFromBoard(currX, currY);
                if (!currPiece && currX < 8 && currY < 8 && currX >= 0 && currY >= 0) {
                    options.push({ myX: currX, myY: currY });
                }
            }

            if (currPiece && currPiece.color != this.color) {
                options.push({ myX: currX, myY: currY });
            }

            return options;
    }

    moveOptions(myX, myY, gameService) {
        const arr = [];
        const optionsArr = arr.concat(
            this.run(2, 1, myX, myY, gameService),
            this.run(2, -1, myX, myY, gameService),
            this.run(-2, 1, myX, myY, gameService),
            this.run(-2, -1, myX, myY, gameService),
            this.run(-1, -2, myX, myY, gameService),
            this.run(1, -2, myX, myY, gameService),
            this.run(-1, 2, myX, myY, gameService),
            this.run(1, 2, myX, myY, gameService));
        return optionsArr;
    }

}
