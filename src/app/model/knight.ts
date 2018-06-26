import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Knight extends Piece {
    constructor(type, color, gameService) {
        super(type, color, gameService);
        this.type = type;
        this.color = color;
        this.b = '../../assets/pieces_B/Knight-Yellow-icon-75.png';
        this.w = '../../assets/pieces_Y/Knight-Yellow-icon.png';
        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
    }
    moveOptions(myX, myY) {
        const arr = [];
        const optionsArr = arr.concat(
            this.run(2, 1, myX, myY),
            this.run(2, -1, myX, myY),
            this.run(-2, 1, myX, myY),
            this.run(-2, -1, myX, myY),
            this.run(-1, -2, myX, myY),
            this.run(1, -2, myX, myY),
            this.run(-1, 2, myX, myY),
            this.run(1, 2, myX, myY));
        return optionsArr;
    }

}
