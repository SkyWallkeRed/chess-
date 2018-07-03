import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenMax } from 'gsap';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from '../../../node_modules/gsap/all';

@Component({
  selector: 'app-pre-game-animation',
  templateUrl: './pre-game-animation.component.html',
  styleUrls: ['./pre-game-animation.component.scss']
})
export class PreGameAnimationComponent implements OnInit {
  @ViewChild('animationBox') animationBox: ElementRef;
  @ViewChild('k') k: ElementRef;
  @ViewChild('wep') wep: ElementRef;
  @ViewChild('blood') blood: ElementRef;
  private tl = new TimelineMax();

  public bloodMark2 = false;
  private bloodMark = false;
  public axe = false;
  private status = false;
  constructor() { }

  ngOnInit() {
  }
  animate() {
    this.axe = true;
    this.status = !this.status;
    this.tl.to(this.k.nativeElement, 0.2, { bottom: 20 }).to(this.k.nativeElement, 0.2, { top: 20 });
    this.axe = true;
    TweenMax.to(this.wep.nativeElement, 1, { left: 60 });
    TweenMax.to(this.wep.nativeElement, 0.5, { rotationX: '360_w', rotationY: '-60_short' });
    TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '700_w', top: 150 });
    setTimeout(() => {
      TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '60_short' });
      setTimeout(() => {
        this.axe = false;
        setTimeout(() => {
          this.bloodMark = false;
        }, 500);
      }, 500);
      this.bloodMark = true;
    }, 500);
  }

}
