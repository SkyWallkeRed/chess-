import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from '../../../node_modules/gsap/all';
import { ElementRef, ViewChild } from '@angular/core';
import { TweenMax } from 'gsap';
@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  @Output() bloodMarkCell: EventEmitter<any> = new EventEmitter();
  @ViewChild('piece') piece: ElementRef;
  @ViewChild('wep') wep: ElementRef;
  @ViewChild('blood') blood: ElementRef;
  private bloodMark = false;
  private axe = false;
  private sword = false;
  private dragon = false;
  private status = false;
  constructor() { }
  private tl = new TimelineMax();
  //
  private myUrl;

  @Input() myPiece;
  @Input() killActive;

  ngOnInit() {
    // console.log(this.myPiece.imgUrl);
    if (this.myPiece !== null) {
      this.myUrl = this.myPiece.imgUrl;

    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    if (this.killActive) {
      // this.kill();
      this.killActive = false;
    }
  }
  jump() {
    this.axe = false;
    this.status = !this.status;
    this.tl.to(this.piece.nativeElement, 0.2, { bottom: 20 }).to(this.piece.nativeElement, 0.2, { top: 50 });
  }

  attack() {
    // console.log(this.myPiece.type)
    if (this.myPiece.type == 'pawn') {
      this.sword = true;
    } else if (this.myPiece.type == 'knight') {
      this.dragon = true;
    } else {
      this.axe = true;

    }
    TweenMax.to(this.wep.nativeElement, 1, { left: 75, bottom: 80 });
    TweenMax.to(this.wep.nativeElement, 0.5, { rotationX: '360_w', rotationY: '-60_short' });

  }
  kill() {
    this.attack();
    console.log('kill');
    TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '700_w' });

    // TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '100' });
    // TweenMax.to(this.wep.nativeElement, 0.5, { top: 150 });
    this.bloodMarkCell.emit(true);

    setTimeout(() => {
      this.finish();
      this.bloodMark = true;
    }, 500);
  }
  finish() {
    TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '60_short' });
    setTimeout(() => {
      this.done();
    }, 500);
  }
  done() {
    this.axe = false;
    setTimeout(() => {
      this.bloodMark = false;
    }, 1000);
  }

}
