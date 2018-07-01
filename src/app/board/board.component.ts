import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { GameService } from '../game.service';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardArray: Array<any>;
  optionsArray: Array<any> = [];
  deadArray: Array<any> = [];
  @Input() isMultiplayer;

  @ViewChild('container') container: ElementRef;

  constructor(private gameService: GameService) {
    this.getBoard();
    this.getArrays();
  }

  ngOnInit() {
    this.gameService.makeMultiplayer(this.isMultiplayer)    
    this.gameService.getData();
    TweenMax.to(this.container.nativeElement, 5, { opacity: 1 });

    // this.boardArray[this.optionsArray[0].myY][this.optionsArray[0].myX]
  }
  getBoard() {
    this.gameService.boardObservable.subscribe((data) => {
      this.boardArray = data;
    });
  }
  getArrays() {
    this.gameService.optionsObservable.subscribe((data) => {
      this.optionsArray = data;
    });

    this.gameService.deadObservable.subscribe((data) => {
      this.deadArray = data;
      console.log(this.deadArray)
    });
  }


}



