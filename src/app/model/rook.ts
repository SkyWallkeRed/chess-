import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Rook extends Piece {
    constructor(type, color, gameService) {
        super(type, color, gameService);
        this.type = type;
        this.color = color;
        this.b = 'https://i.imgur.com/xReB5uX.png';
        this.w = 'http://icons.iconarchive.com/icons/icons-land/vista-chess/128/Rook-Yellow-icon.png';
        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
    }
    moveOptions(myX, myY) {
        let arr =[]
        let optionsArr = arr.concat(this.run(1, 0, myX,myY), this.run(-1, 0, myX,myY), this.run(0, 1, myX,myY), this.run(0, -1, myX,myY)) 
        // arr.concat(this.run(-1, 0, myX,myY)) 
        // arr.concat(this.run(0, 1, myX,myY)) 
        // arr.concat(this.run(0, -1, myX,myY)) 
        return optionsArr
    }    
}
