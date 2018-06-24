import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private boardArray;
  public cellColor = this.getStyle();
  constructor(private gameService: GameService) {
    // this.cellColor = 'green';
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



