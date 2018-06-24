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
    }
}
