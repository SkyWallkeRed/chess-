import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private boardArray;
  constructor(private gameService: GameService) {

  }

  ngOnInit() {

    this.boardArray = this.gameService.boardArray;
    // console.log(this.boardArray);
    // debugger;
    // this.boardArray = [
    //   [{}, {}, {}, {}, {}, {}, {}, {}],
    //   [{}, {}, {}, {}, {}, {}, {}, {}],
    //   [{}, {}, {}, {}, {}, {}, {}, {}],
    //   [{}, {}, {}, {}, {}, {}, {}, {}],
    //   [{}, {}, {}, {}, {}, {}, {}, {}],
    //   [{}, {}, {}, {}, {}, {}, {}, {}],
    //   [{}, {}, {}, {}, {}, {}, {}, {}],
    //   [{}, {}, {}, {}, {}, {}, {}, {}],
    // ];

  }

}



