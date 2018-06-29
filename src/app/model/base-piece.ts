import { GameService } from "../game.service";

export class Piece {
    public type: string;
    public color: string;
    public imgUrl?: string;
    public b?: string;
    public w?: string;
    public T?: string;


    constructor(type, color) {

        this.type = type;
        this.color = color;
    }

  



    run(xMovment, yMovment, currX, currY, gameService) {
        let options = [];

        let currPiece;
       
            while (!currPiece && currX < 8 && currY < 8 && currX >= 0 && currY >= 0) {
                currX += xMovment;
                currY += yMovment;

                currPiece = gameService.getPieceFromBoard(currX, currY); 
                if (!currPiece) {
                    options.push({ myX: currX, myY: currY });
                }
            }

            if (currPiece && currPiece.color != this.color) {
                options.push({ myX: currX, myY: currY });
            }

            return options;
    }

    unfilteredOptions(xMovment, yMovment, currX, currY, gameService) {
        let options = [];
        let currPiece;
        if (this.type == 'pawn') {
            for (let i = 0; i < 1; i++) {
                currX += xMovment;
                currY += yMovment;

                currPiece = gameService.getPieceFromBoard(currX, currY);


                if (currX < 8 && currY < 8 && currX >= 0 && currY >= 0) {
                    options.push({ myX: currX, myY: currY });
                }
                else{
                    if (currPiece.color != this.color && (xMovment === -1 && yMovment === -1) || (xMovment === 1 && yMovment === -1)) {
                        options.push({ myX: currX, myY: currY });
                    }

                    else {
                        return [];

                    }
                }
            }
        }
        else if (this.type == 'king' || this.type == 'knight') {
            for (let i = 0; i < 1; i++) {
                currX += xMovment;
                currY += yMovment;

                currPiece = gameService.getPieceFromBoard(currX, currY);
                if (currX < 8 && currY < 8 && currX >= 0 && currY >= 0) {
                    options.push({ myX: currX, myY: currY });
                }
            }
        }
        else {
            while (currX < 8 && currY < 8 && currX >= 0 && currY >= 0) {
                currX += xMovment;
                currY += yMovment;

                currPiece = gameService.getPieceFromBoard(currX, currY);

                    options.push({ myX: currX, myY: currY });
                
            }
        }


        return options;
    }


}
