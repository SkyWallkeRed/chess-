import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() myY;
  private rows;
  constructor(private gameService: GameService) {
    this.rows = this.gameService.boardArray[0];
  }

  ngOnInit() {
  }

}
