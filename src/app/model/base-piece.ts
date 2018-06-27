import { GameService } from "../game.service";

export class Piece {
    public type: string;
    public color: string;
    public imgUrl?: string;
    public b?: string;
    public w?: string;

    constructor(type, color, public gameService: GameService) {

        this.type = type;
        this.color = color;
        this.gameService = gameService;
    }

    run(xMovment, yMovment, currX, currY) {
        let options = [];
        let currPiece;
        // currX += xMovment;
        // currY += yMovment;

        // currPiece = this.gameService.getPieceFromBoard(currX, currY);

        if (this.type == 'pawn') {
            for (let i = 0; i < 1; i++) {
                currX += xMovment;
                currY += yMovment;

                currPiece = this.gameService.getPieceFromBoard(currX, currY);


                if (!currPiece && currX < 8 && currY < 8 && currX >= 0 && currY >= 0) {
                    options.push({ myX: currX, myY: currY });

                    // currX = currX + xMovment;
                    // currY = currY + yMovment;
                    // currPiece = this.gameService.getPieceFromBoard(currX, currY);
                }
                else {
                    if (currPiece.color != this.color && (xMovment === -1 && yMovment === -1) || (xMovment === 1 && yMovment === -1)) {
                        options.push({ myX: currX, myY: currY });
                    }
                    else {
                        return []
                    }
                }
            }
        }
        else if (this.type == 'king' || this.type == 'knight') {
            for (let i = 0; i < 1; i++) {
                currX += xMovment;
                currY += yMovment;

                currPiece = this.gameService.getPieceFromBoard(currX, currY);
                if (!currPiece && currX < 8 && currY < 8 && currX >= 0 && currY >= 0) {
                    options.push({ myX: currX, myY: currY });

                    // currX = currX + xMovment;
                    // currY = currY + yMovment;
                    // currPiece = this.gameService.getPieceFromBoard(currX, currY);
                }
            }
        }
        else {
            while (!currPiece && currX < 8 && currY < 8 && currX >= 0 && currY >= 0) {
                currX += xMovment;
                currY += yMovment;

                currPiece = this.gameService.getPieceFromBoard(currX, currY);
                if (currPiece && currPiece.color != this.color) {
                    options.push({ myX: currX, myY: currY });
                }
                else if (!currPiece) {
                    options.push({ myX: currX, myY: currY });
                }
            }
        }

        //THIS DOESNT WORK AS EXPECTED FOR THE KNIGHT BECAUSE HE IS DEPENDENT ON A FOR LOOP SO AFTER THE LOOP ENDS IT WILL STILL GO 
        //THROUGH HERE AND ADD AN EXTRA MOVE TO THE MOVE ARRAY
        if (currPiece && currPiece.color != this.color) {
            options.push({ myX: currX, myY: currY });
        }

        return options;
    }


    //     moveOptions(myX, myY) {
    //         const tempArray = [];
    //         // moveOptions(currentBoard, x, y){
    //         if (this.type == "pawn") {

    //             if (myY == 6) {
    //                 tempArray.push({ myX: myX, myY: myY - 1 }, { myX: myX, myY: myY - 2 });
    //                 return tempArray;
    //             } else if (myY - 2 >= 0) {
    //                 tempArray.push({ myX: myX, myY: myY - 1 });
    //                 return tempArray;
    //             }
    //         } else if (this.type == "knight") {

    //         } else if (this.type == "bishop") {
    //             for (let i = 1; i < 8; i++) {

    //             if (myX + i < 8 && myX + i >=0 && myY + i >=0 && myY + i < 8) {
    //                tempArray.push({myX: myX + i, myY: myY + i});
    //             }
    //              if (myX + i < 8 && myX + i >=0 && myY - i >=0 && myY - i < 8) {
    //                 tempArray.push({myX: myX + i, myY: myY - i});
    //              }
    //              if (myX - i < 8 && myX - i >=0 && myY + i >=0 && myY + i < 8) {
    //                 tempArray.push({myX: myX - i, myY: myY + i});
    //              }
    //              if (myX - i < 8 && myX - i >=0 && myY - i >=0 && myY - i < 8) {
    //                 tempArray.push({myX: myX - i, myY: myY - i});
    //              }
    //             }

    //             return tempArray;

    //         } else if (this.type == "queen") {
    //             console.log(this.color + " " + this.type + ' clicked');
    //         } else if (this.type == "king") {
    //             if (myY - 1 >= 0 && myY + 1 <= 7 && myX - 1 >= 0 && myX + 1 <= 7) {
    //                 tempArray.push({ myX: myX, myY: myY - 1 },
    //                     { myX: myX, myY: myY + 1 },
    //                     { myX: myX - 1, myY: myY },
    //                     { myX: myX + 1, myY: myY });
    //                 return tempArray;
    //             } else if (myY + 1 <= 7 && myX - 1 >= 0 && myX + 1 <= 7) {
    //                 tempArray.push({ myX: myX, myY: myY + 1 }, { myX: myX - 1, myY: myY }, { myX: myX + 1, myY: myY })
    //                 return tempArray;
    //             } else if (myY - 1 >= 0 && myX - 1 >= 0 && myX + 1 <= 7) {
    //                 tempArray.push({ myX: myX, myY: myY - 1 }, { myX: myX - 1, myY: myY }, { myX: myX + 1, myY: myY })
    //                 return tempArray;
    //             } else if (myY - 1 >= 0 && myY + 1 <= 7 && myX + 1 <= 7) {
    //                 tempArray.push({ myX: myX, myY: myY - 1 }, { myX: myX, myY: myY + 1 }, { myX: myX + 1, myY: myY })
    //                 return tempArray;
    //             } else if (myY - 1 >= 0 && myY + 1 <= 8 && myX - 1 >= 0) {
    //                 tempArray.push({ myX: myX - 1, myY: myY - 2 }, { myX: myX - 1, myY: myY + 2 }, { myX: myX - 2, myY: myY - 1 })
    //                 return tempArray;
    //             }

    //         } else if (this.type == "rook") {
    //             console.log(this.color + ' ' + this.type + ' clicked');
    //         }

    //     }
}
