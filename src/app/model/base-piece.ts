export class Piece {
    public type: string;
    public color: string;
    public noMoveAllowed: boolean = false;
    validateColor (pressedColor) {
        if (this.color !== pressedColor) {
            return this.moveOptions()
        }
        else {
            this.noMoveAllowed = true;
            //"<div *ngFor= "noMoveAllowed == true" >You can't move this piece!</div>"
        }
    }

    moveOptions(){
    // moveOptions(currentBoard, x, y){
        if(this.type == "pawn"){
            console.log(this.color + " " + this.type + ' clicked')
        }
        else if(this.type == "knight"){
            console.log(this.color + " " + this.type + ' clicked')
        }
        else if(this.type == "bishop"){
            console.log(this.color + " " + this.type + ' clicked')
        }
        else if(this.type == "queen"){
            console.log(this.color + " " + this.type + ' clicked')
        }
        else if(this.type == "king"){
            console.log(this.color + " " + this.type + ' clicked')
        }
        else if(this.type == "rook"){
            console.log(this.color + " " + this.type + ' clicked')
        }
    } 
}
