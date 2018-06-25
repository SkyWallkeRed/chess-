export class Piece {
    public type: string;
    public color: string;
    public imgUrl?: string;
    public b?: string;
    public w?: string;

    public tempArray: Array<any> = []
    moveOptions(myX, myY) {
        // moveOptions(currentBoard, x, y){
        if (this.type == "pawn") {
            if (myY - 1 == 6) {
                this.tempArray.push({ myX: myX - 1, myY: myY - 2 }, { myX: myX - 1 , myY: myY - 3 })
                return this.tempArray
            }
            else if (myY - 1 >= 0) {
                this.tempArray.push({ myX: myX - 1, myY: myY - 2 })
                return this.tempArray
            }
        }
        else if (this.type == "knight") {
            console.log(this.color + " " + this.type + ' clicked')
        }
        else if (this.type == "bishop") {
            console.log(this.color + " " + this.type + ' clicked')
        }
        else if (this.type == "queen") {
            console.log(this.color + " " + this.type + ' clicked')
        }
        else if (this.type == "king") {
            console.log(this.color + " " + this.type + ' clicked')
        }
        else if (this.type == "rook") {
            console.log(this.color + " " + this.type + ' clicked')
        }

    }
}
