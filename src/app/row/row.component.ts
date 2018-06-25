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
  // @Output() cellColorOutPut: EventEmitter<any> = new EventEmitter();

  constructor(private gameService: GameService) {

    // this.cellColor = 'white';
  }

  ngOnInit() {
    this.rows = this.gameService.boardArray[this.myY];
  }
  getStyle() {
    // debugger
    // return 'green';
    // this.cellColorOutPut.emit(this.cellColor);

    if (this.cellColor === 'white') {
      this.cellColor = 'black';
      return 'white';
    } else if (this.cellColor === 'black') {
      this.cellColor = 'white';
      return 'black';
    }
  }

}
