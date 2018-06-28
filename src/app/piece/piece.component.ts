import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from '../../../node_modules/gsap/all';
import { ElementRef, ViewChild } from '@angular/core';
import { TweenMax } from 'gsap';
import { GameService } from '../game.service';
@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  // @Output() bloodMarkCell: EventEmitter<any> = new EventEmitter();
  private killActive = false;
  @Input() myPiece;
  @Input() animateKill;
  @ViewChild('piece') piece: ElementRef;
  @ViewChild('wep') wep: ElementRef;
  // @ViewChild('blood') blood: ElementRef;
  private tl = new TimelineMax();
  private bloodMark;
  private axe = false;
  private sword = false;
  private dragon = false;
  private status = false;
  private kq = false;
  private myUrl;

  constructor(private gameService: GameService) { }
  //


  ngOnInit() {
    // console.log('on init')
    //   SUBSCRIBE TO A KILL EVENT THAT WILL ANIMATE BLOOD MARK.
    this.gameService.killObservable.subscribe((data) => {
      this.killActive = data;
      console.log(this.killActive);
    });

    if (this.myPiece !== null) {
      this.myUrl = this.myPiece.imgUrl;
      // on board load all blood mark are activ for 3 sec|
      // setTimeout(() => {
      //   if (this.killActive) {
      //     this.bloodMark = true;
      //   }
      // }, 1000);

      // this.bloodMark = true;
      // setTimeout(() => {
      //   this.bloodMark = false;
      // }, 3000);


    }

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {

  }
  // JUMP IS THE OC-CLICK OF EACH PIECE .
  jump() {
    // console.log('jump');
    this.tl.to(this.piece.nativeElement, 0.2, { bottom: 20 }).to(this.piece.nativeElement, 0.2, { top: 50 });
    this.attack();
  }
  attack() {
    // console.log('attack');
    // CHECK WHAT WEPON PER PIECE =>
    if (this.myPiece.type === 'pawn') {
      this.sword = true;
    } else if (this.myPiece.type === 'knight') {
      this.dragon = true;
    } else {
      this.axe = true;
    }
    // SHOW WEPON ANIMATION =>
    TweenMax.to(this.wep.nativeElement, 1, { left: 75, bottom: 80 });
    TweenMax.to(this.wep.nativeElement, 0.5, { rotationX: '360_w', rotationY: '-60_short' });

  }
  // KILL ISNT BEEING USED ET THES MOMENT.
  kill() {

  }


}
