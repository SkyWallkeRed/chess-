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
  private killActive = false;
  @Input() myPiece;
  @Input() animateKill;
  @ViewChild('piece') piece: ElementRef;
  @ViewChild('wep') wep: ElementRef;
  private tl = new TimelineMax();
  private bloodMark;
  private axe = false;
  private sword = false;
  private dragon = false;
  private status = false;
  private kq = false;
  private myUrl;
  // SOUND SETUP .
  public pieceSounds = [
    '',
    '../../assets/sound/game/piesesSound/PIGEONCOO.WAV',
    '../../assets/sound/game/piesesSound/COUGH5.WAV',
    '../../assets/sound/game/piesesSound/Cough4.wav',
    '../../assets/sound/game/piesesSound/Cough3.wav',
    '../../assets/sound/game/piesesSound/Cough2.wav',
    '../../assets/sound/game/piesesSound/COUGH1.WAV'
  ];
  private pieceSound = new Audio();
  constructor(private gameService: GameService) {
    this.pieceSound.src = this.pieceSounds[this.setSound()];
  }
  setSound() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  }
  ngOnInit() {
    this.setSound();

    this.pieceSound.load();
    //   SUBSCRIBE TO A KILL EVENT THAT WILL ANIMATE BLOOD MARK.
    this.gameService.killObservable.subscribe((data) => {
      this.killActive = data;
      console.log(this.killActive);
    });

    if (this.myPiece !== null) {
      this.myUrl = this.myPiece.imgUrl;
      // on board load all blood mark are activ for 3 sec.

      // BUGGED BLOOD EFFECT NEED WORK .

      // setTimeout(() => {
      //   if (this.killActive) {
      //     this.bloodMark = true;
      //   }
      // }, 1000);

      // this.bloodMark = true;
      // setTimeout(() => {
      //   this.bloodMark = false;
      // }, 3000);

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
    }

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() { // ------------------------------------------ NEED TO ADD UNSUBSCRIBE ######################## .

  }
  // JUMP IS THE OC-CLICK OF EACH PIECE .
  jump() {
    this.pieceSound.play();
    this.tl.to(this.piece.nativeElement, 0.2, { bottom: 20 }).to(this.piece.nativeElement, 0.2, { top: 50 });
    this.attack();
  }
  attack() {
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
    this.clearWep();
  }
  // KILL ISNT BEEING USED ET THES MOMENT.
  clearWep() {
    setTimeout(() => {
      if (this.sword || this.axe || this.dragon) {
        this.dragon = false;
        this.axe = false;
        this.sword = false;
      }
    }, 5000);
  }
}


