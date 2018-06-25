export class Piece {
    public type: string;
    public color: string;
    public imgUrl?: string;
    public b?: string;
    public w?: string;

    moveOptions(myX, myY) {
        var tempArray = []
        // moveOptions(currentBoard, x, y){
        if (this.type == "pawn") {

            if (myY  == 6) {
                tempArray.push({ myX: myX , myY: myY - 1 }, { myX: myX  , myY: myY - 2 })
                return tempArray
            }
            else if (myY - 2 >= 0) {
                tempArray.push({ myX: myX , myY: myY - 1 })
                return tempArray
            }
        }
        else if (this.type == "knight") {

        }
        else if (this.type == "bishop") {
            for (let i = 1; i < 8; i++) {
            if (myX + i < 8 && myX + i >=0 && myY + i >=0 && myY + i < 8) {
               tempArray.push({myX: myX + i, myY: myY + i});
            }
             if (myX + i < 8 && myX + i >=0 && myY - i >=0 && myY - i < 8) {
                tempArray.push({myX: myX + i, myY: myY - i});
             }
             if (myX - i < 8 && myX - i >=0 && myY + i >=0 && myY + i < 8) {
                tempArray.push({myX: myX - i, myY: myY + i});
             }
             if (myX - i < 8 && myX - i >=0 && myY - i >=0 && myY - i < 8) {
                tempArray.push({myX: myX - i, myY: myY - i});
             }
            }
            return tempArray;

        }
        else if (this.type == "queen") {
            console.log(this.color + " " + this.type + ' clicked');
        }
        else if (this.type == "king") {
            if (myY - 1 >= 0 && myY + 1 <= 7 && myX -1 >= 0 && myX + 1 <= 7 ) {
                tempArray.push({ myX: myX , myY: myY - 1 }, { myX: myX , myY: myY + 1 }, { myX: myX - 1, myY: myY }, { myX: myX + 1, myY: myY })
                return tempArray
            }
            else if (myY + 1 <= 7 && myX -1 >= 0 && myX + 1 <= 7 ) {
                tempArray.push({ myX: myX , myY: myY + 1 }, { myX: myX - 1, myY: myY }, { myX: myX + 1, myY: myY })
                return tempArray
            }
            else if (myY - 1 >= 0  && myX -1 >= 0 && myX + 1 <= 7 ) {
                tempArray.push({ myX: myX , myY: myY - 1 }, { myX: myX - 1, myY: myY }, { myX: myX + 1, myY: myY })
                return tempArray
            }
            else if (myY - 1 >= 0 && myY + 1 <= 7 && myX + 1 <= 7 ) {
                tempArray.push({ myX: myX , myY: myY - 1 }, { myX: myX , myY: myY + 1 }, { myX: myX + 1, myY: myY })
                return tempArray
            }
            else if (myY - 1 >= 0 && myY + 1 <= 8 && myX -1 >= 0 ) {
                tempArray.push({ myX: myX - 1, myY: myY - 2 }, { myX: myX - 1, myY: myY + 2 }, { myX: myX - 2, myY: myY - 1 })
                return tempArray
            }

        }
        else if (this.type == "rook") {
            console.log(this.color + " " + this.type + ' clicked');
        }

    }
}
