import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  public cellColor = 'green';
  // private colo = this.cellColorF();
  @Input() myX;
  @Input() myY;
  @Input() myPiece;
  // private cellColor = 'white';
  constructor() {

  }

  ngOnInit() {
    this.cellColorF();
  }
  cellColorF() {
    // debugger
    const t = this.myX + this.myY;
    if (t % 2 === 0) {
      this.cellColor = 'white';
      return 'white';
    } else {
      this.cellColor = 'black';
      return 'black';
    }
  }
  move(){
    this.myPiece.moveOptions()
    // ADD SERVICE TO THIS COMPONENT?
    // this.gameService.move(myX, myY, myPiece)
  }

}

