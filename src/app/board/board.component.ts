import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('home') home: ElementRef;

  @ViewChild('container') container: ElementRef;
  public audio = new Audio();

  constructor(private gameService: GameService) {
    this.audio.src = '../../assets/sound/StartRound.WAV';

    this.getBoard();
    this.getArrays();
  }

  ngOnInit() {
    this.audio.load();


    this.gameService.getData();
    TweenMax.to(this.container.nativeElement, 5, { opacity: 1 });
    this.audio.play();


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
    });
  }



}



