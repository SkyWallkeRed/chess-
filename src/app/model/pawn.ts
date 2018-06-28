import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class Pawn extends Piece {
    // private white ;
    constructor(type, color) {

        super(type, color);
        this.color = color;


        this.type = type;

        this.b = '../../assets/pieces_B/Pawn-Yellow-icon-75.png';
        this.w = '../../assets/pieces_Y/Pawn-Yellow-icon.png';

        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
        // console.log(this.imgUrl);
        // this.moveOptions = this.moveOptions()
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
                else{
                    if(this.color == 'white'){
                    if (currPiece.color != this.color && (xMovment === -1 && yMovment === -1) || (xMovment === 1 && yMovment === -1)) {
                        options.push({ myX: currX, myY: currY });
                    }
                    else{
                        return []
                    }
                  }
                  else if(this.color == 'black'){
                    if (currPiece.color != this.color && (xMovment === 1 && yMovment === 1) || (xMovment === -1 && yMovment === 1)) {
                        options.push({ myX: currX, myY: currY });
                    }
                    else{
                        return []
                    }
                  }
                }
            }
            if (currPiece && currPiece.color != this.color) {
                options.push({ myX: currX, myY: currY });
            }
    
            return options;
    }
    moveOptions(myX, myY, gameService) {

        let tempArr = []
        let optionsArr = []
       if(this.color == "white"){
        if (gameService.getPieceFromBoard(myX - 1, myY - 1) && gameService.getPieceFromBoard(myX - 1, myY - 1).color !== this.color) {
            optionsArr = optionsArr.concat(this.run(-1, -1, myX, myY, gameService))
        }
        if (gameService.getPieceFromBoard(myX + 1, myY - 1) && gameService.getPieceFromBoard(myX + 1, myY - 1).color !== this.color) {
            optionsArr = optionsArr.concat(this.run(1, -1, myX, myY, gameService))
        }

        optionsArr = optionsArr.concat(this.run(0, -1, myX, myY, gameService))
        if (myY == 6) {
            optionsArr = optionsArr.concat(this.run(0, -2, myX, myY, gameService))
        }
    }
    else if(this.color == 'black'){
        if (gameService.getPieceFromBoard(myX + 1, myY + 1) && gameService.getPieceFromBoard(myX + 1, myY + 1).color !== this.color) {
            optionsArr = optionsArr.concat(this.run(+1, +1, myX, myY, gameService))
        }
        if (gameService.getPieceFromBoard(myX - 1, myY + 1) && gameService.getPieceFromBoard(myX - 1, myY + 1).color !== this.color) {
            optionsArr = optionsArr.concat(this.run(-1, 1, myX, myY, gameService))
        }

        optionsArr = optionsArr.concat(this.run(0, 1, myX, myY, gameService))
        if (myY == 1) {
            optionsArr = optionsArr.concat(this.run(0, 2, myX, myY, gameService))
        }

    }

        return optionsArr
    }
    

}
