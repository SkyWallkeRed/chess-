import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Bishop extends Piece {
    constructor(type, color, gameService) {
        super(type, color, gameService);
        this.type = type;
        this.color = color;
        this.b = '../../assets/pieces_B/Bishop-Yellow-icon-75.png';
        this.w = '../../assets/pieces_Y/Bishop-Yellow-icon.png';
        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
    }
    moveOptions(myX, myY) {
        const arr = [];
        const optionsArr = arr.concat(this.run(1, 1, myX, myY),
            this.run(-1, -1, myX, myY), this.run(1, -1, myX, myY),
            this.run(-1, 1, myX, myY));
        return optionsArr;
    }
}
