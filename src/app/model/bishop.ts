import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Bishop extends Piece {
    constructor(type, color, gameService) {
        super(type, color, gameService);
        this.type = type;
        this.color = color;
        this.b = 'https://i.imgur.com/JWWS1wh.png';
        this.w = 'http://icons.iconarchive.com/icons/icons-land/vista-chess/128/Bishop-Yellow-icon.png';
        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
    }
    moveOptions(myX, myY) {
        let arr =[]
        let optionsArr = arr.concat(this.run(1, 1, myX,myY), this.run(-1, -1, myX,myY), this.run(1, -1, myX,myY), this.run(-1, 1, myX,myY)) 
        return optionsArr
    }   
}
