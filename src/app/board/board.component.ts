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
  gameOver: boolean;
  currentTurn : string

  @Input() isMultiplayer;

  @ViewChild('home') home: ElementRef;


  @ViewChild('container') container: ElementRef;
  public audio = new Audio();
  public gameId: string;
  constructor(private gameService: GameService) {
    this.audio.src = '../../assets/sound/StartRound.WAV';

    this.getBoard();
    this.getArrays();

    this.gameService.gameIdObservable.subscribe((data)=>{
      this.gameId = data;
    })
    this.gameService.gameOverObservable.subscribe((data)=>{
      this.gameOver = data;
    })
    this.gameService.currentTurnObservable.subscribe((data)=>{
      this.currentTurn = data;
    })

  }

  ngOnInit() {
    // this.gameService.gameIdObservable.subscribe((data) => {
    //   console.log(data);
    //   this.gameId = data;
    // });

    this.gameService.makeMultiplayer(this.isMultiplayer);
    this.audio.load();

    this.startGame();
    TweenMax.to(this.container.nativeElement, 5, { opacity: 1 });
    this.audio.play();


    // this.boardArray[this.optionsArray[0].myY][this.optionsArray[0].myX]
  }
  startGame() {
    this.gameService.startGame();
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



