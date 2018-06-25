import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class King extends Piece {
    constructor(type, color, gameService) {
        super(type, color, gameService);

        this.b = 'https://cdn4.iconfinder.com/data/icons/chess-icons/200/chess_black_king-512.png';
        this.w = 'http://icons.iconarchive.com/icons/icons-land/vista-chess/128/King-Yellow-icon.png';
        this.imgUrl = this.color === 'white' ? this.w :  this.b;
    }

    moveOptions(myX, myY) {
        let arr =[]
        let optionsArr = arr.concat(
            this.run(0, -1, myX,myY), 
            this.run(-1, 0, myX,myY), 
            this.run(0, 1, myX,myY), 
            this.run(1, 0, myX,myY), 
            this.run(1, 1, myX,myY), 
            this.run(-1, -1, myX,myY), 
            this.run(1, -1, myX,myY), 
            this.run(-1, 1, myX,myY),
         ) 
        return optionsArr
    }  
}
