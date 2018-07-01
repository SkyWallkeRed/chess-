import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { GameService } from '../game.service';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-offline-board',
  templateUrl: './offline-board.component.html',
  styleUrls: ['./offline-board.component.scss']
})
export class OfflineBoardComponent implements OnInit {

  @ViewChild('container') container: ElementRef;

  public isMultiplayer : boolean
  constructor() {
  this.isMultiplayer = false
  }

  ngOnInit() {
  }
}
