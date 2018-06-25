export class Piece {
    public type: string;
    public color: string;
    public imgUrl?: string;
    public b?: string;
    public w?: string;

    public tempArray: Array<any> = [];
    moveOptions(myX, myY) {
        // moveOptions(currentBoard, x, y){
        if (this.type == "pawn") {
            if (this.type == "pawn") {
                if (myY == 6) {
                    this.tempArray.push({ myX: myX, myY: myY - 1 }, { myX: myX, myY: myY - 2 })
                    // console.log(this.tempArray)
                    return this.tempArray;
                } else if (myY - 2 >= 0) {
                    this.tempArray.push({ myX: myX, myY: myY - 1 });
                    // console.log(this.tempArray)

                    return this.tempArray;
                }
            }
        } else if (this.type == "knight") {
            console.log(this.color + " " + this.type + ' clicked');
        }
        else if (this.type == "bishop") {
            console.log(this.color + " " + this.type + ' clicked');
        }
        else if (this.type == "queen") {
            console.log(this.color + " " + this.type + ' clicked');
        }
        else if (this.type == "king") {
            console.log(this.color + " " + this.type + ' clicked');
        }
        else if (this.type == "rook") {
            console.log(this.color + " " + this.type + ' clicked');
        }

    }
}
