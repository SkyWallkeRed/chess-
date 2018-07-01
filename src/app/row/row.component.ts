import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';


@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() myY: number;
  @Input() optionsArray;

  private rows;
  private cellColor = this.getStyle();
  

  constructor(private gameService: GameService) {


  }

  ngOnInit() {
    this.rows = this.gameService.boardArray[this.myY];
  }
  getStyle() {

    if (this.cellColor === 'white') {
      this.cellColor = 'black';
      return 'white';
    } else if (this.cellColor === 'black') {
      this.cellColor = 'white';
      return 'black';
    }
  }

}
