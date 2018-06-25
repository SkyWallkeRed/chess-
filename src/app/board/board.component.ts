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
  @ViewChild('container') container: ElementRef;

  constructor(private gameService: GameService) {
    this.getBoard();

  }

  ngOnInit() {
    this.gameService.getData();
    TweenMax.to(this.container.nativeElement, 5, { opacity: 1 });


  }
  getBoard() {
    this.gameService.boardObservable.subscribe((data) => {
      this.boardArray = data;
    });
  }


}



