import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';

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
  constructor(private gameService : GameService) {


  }

  ngOnInit() {
    this.cellColorF();

  }
  cellColorF() {
    const t = this.myX + this.myY;
    if (t % 2 === 0) {
      this.cellColor = 'white';
      return 'white';
    } else {
      this.cellColor = 'black';
      return '#777777';
    }
  }

  getOptions(){
    this.gameService.getOptions(this.myX, this.myY, this.myPiece)
  }

}

