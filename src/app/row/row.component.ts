import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() myY;
  private rows;
  @Input() cellColor;
  // @Output() cellColorOutPut: EventEmitter<any> = new EventEmitter();

  constructor(private gameService: GameService) {
    this.rows = this.gameService.boardArray[0];
    // this.cellColor = 'white';
  }

  ngOnInit() {
  }


}
