import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Bishop extends Piece {
    constructor(type, color) {
        super(type, color);
        this.type = type;
        this.color = color;

        this.b = '../../assets/pieces_B/Bishop-Yellow-icon-75.png';
        this.w = '../../assets/pieces_Y/Bishop-Yellow-icon.png';

        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
    }
    moveOptions(myX, myY, gameService) {
        const arr = [];
        const optionsArr = arr.concat(this.run(1, 1, myX, myY, gameService),
            this.run(-1, -1, myX, myY, gameService), this.run(1, -1, myX, myY, gameService),
            this.run(-1, 1, myX, myY, gameService));
        return optionsArr;
    }
}
