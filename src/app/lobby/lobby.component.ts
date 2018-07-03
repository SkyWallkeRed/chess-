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
  // @ViewChild('pickColor') pickColor: ElementRef;
  @ViewChild('play1') play1: ElementRef;
  @ViewChild('home') home: ElementRef;
  @ViewChild('txtSearch') txtSearch: ElementRef;


  private menu = false;
  private tl = new TimelineMax();
  // public myText;
  public roomName: string;
  public rooms : Array<any>
  constructor(private gameService: GameService) { 
    this.rooms = [];    
    this.gameService.roomArrayObservable.subscribe((data)=>{
      this.rooms = data
    })
  }

  ngOnInit() {
    this.menu = true;
    this.tl.to(this.home.nativeElement, 0.2, { opacity: 1 }).
      // to(this.pickColor.nativeElement, 0.2, { opacity: 1 }).
      to(this.play1.nativeElement, 0.2, { opacity: 1 });
  }
  createRoom() {
    this.gameService.createRoom(this.roomName);
  }
  joinRoom(roomName){
    this.gameService.createRoom(roomName);    
  }
  // slidePickColor() {
  //   this.tl.to(this.pickColorWindow.nativeElement, 0.1, { top: 450, right: 100 }).
  //     to(this.pickColorWindow.nativeElement, 1, { opacity: 1 });
  // }
  sendData(data) {
    console.log(this.roomName);
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

