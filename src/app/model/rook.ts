import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Rook extends Piece {
    constructor(type, color) {
        super(type, color);
        this.type = type;
        this.color = color;

        this.b = '../../assets/pieces_B/Rook-Yellow-icon-75.png';
        this.w = '../../assets/pieces_Y/Rook-Yellow-icon.png';

        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
    }
    moveOptions(myX, myY, gameService) {
        const arr = [];
        const optionsArr = arr.concat(this.run(1, 0, myX, myY, gameService),
            this.run(-1, 0, myX, myY, gameService),
            this.run(0, 1, myX, myY, gameService),
            this.run(0, -1, myX, myY, gameService));
        // arr.concat(this.run(-1, 0, myX,myY))
        // arr.concat(this.run(0, 1, myX,myY))
        // arr.concat(this.run(0, -1, myX,myY))
        return optionsArr;
    }
}
