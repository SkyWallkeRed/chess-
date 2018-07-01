import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { GameService } from '../game.service';
import { TweenMax } from 'gsap';
@Component({
  selector: 'app-online-board',
  templateUrl: './online-board.component.html',
  styleUrls: ['./online-board.component.scss']
})
export class OnlineBoardComponent implements OnInit {

  @ViewChild('container') container: ElementRef;

  public isMultiplayer : boolean
  constructor() {
  this.isMultiplayer = true
  }

  ngOnInit() {
  }
}
 