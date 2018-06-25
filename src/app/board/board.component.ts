import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardArray: Array<any>;
  constructor(private gameService: GameService) {
    this.getBoard();
  }

  ngOnInit() {
    this.gameService.getData();

  }
  getBoard() {
    this.gameService.boardObservable.subscribe((data) => {
      this.boardArray = data;
    });
  }

}



