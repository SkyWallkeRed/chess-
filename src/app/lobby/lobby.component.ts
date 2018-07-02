import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenMax } from 'gsap';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from '../../../node_modules/gsap/all';
import { GameService } from '../game.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  @ViewChild('pickColorWindow') pickColorWindow: ElementRef;
  @ViewChild('pickColor') pickColor: ElementRef;
  @ViewChild('play1') play1: ElementRef;
  @ViewChild('home') home: ElementRef;
  private menu = false;
  private tl = new TimelineMax();
  public myText

  constructor(private gameService : GameService) { }

  ngOnInit() {
    this.menu = true;
    this.tl.to(this.home.nativeElement, 0.2, { opacity: 1 }).
    to(this.pickColor.nativeElement, 0.2, { opacity: 1 }).
    to(this.play1.nativeElement, 0.2, { opacity: 1 });
  }
  createRoom(){
    this.gameService.createRoom(this.myText)
  }
  slidePickColor() {
    this.tl.to(this.pickColorWindow.nativeElement, 0.1, { top: 450, right: 500 }).
      to(this.pickColorWindow.nativeElement, 1, { opacity: 1 });
  }
  // toggleMenu() {
  //   if (!this.menu) {
  //     this.menu = true;
  //     this.tl.to(this.home.nativeElement, 0.2, { opacity: 1 }).
  //       to(this.pickColor.nativeElement, 0.2, { opacity: 1 }).
  //       to(this.play1.nativeElement, 0.2, { opacity: 1 });
  //   } else if (this.menu) {
  //     this.menu = false;
  //     this.tl.to(this.home.nativeElement, 0.2, { opacity: 0 }).
  //       to(this.pickColor.nativeElement, 0.2, { opacity: 0 }).
  //       to(this.play1.nativeElement, 0.2, { opacity: 0 });
  //   }



  // }
}

