import { Injectable, ElementRef, ViewChild } from '@angular/core';

import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from '../../node_modules/gsap/all';
import { Component, OnInit } from '@angular/core';
import { TweenMax } from 'gsap';

@Injectable({
  providedIn: 'root'
})

export class AnimateService {
  // public blood: ElementRef;
  // public wep: ElementRef;
  // public type: ElementRef;
  @ViewChild('piece') piece: ElementRef;

  private tl = new TimelineMax();
  // private t: string;
  // private color: string;
  // private ele: string;
  // private bloodMark = false;
  // private axe = false;
  // private status = false;
  private currentLocation;
  private currentPiece;
  private newPosition;

  constructor() {

  }

  setCurrentLocation(currentPiece, currentLocation) {
    console.log(currentPiece);
    console.log(currentLocation.top, currentLocation.right, currentLocation.bottom, currentLocation.left);
  }
  setNewPosition(newPosition) {
    console.log(newPosition.top, newPosition.right, newPosition.bottom, newPosition.left);
  }
  buildAnimation() {

  }
  moveToTargrt() {
    TweenMax.to(this.piece.nativeElement, 1, { bottom: 200 });

  }

  // jump() {
  //   this.status = !this.status;
  //   this.tl.to(this.type.nativeElement, 0.2, { bottom: 20 }).to(this.type.nativeElement, 0.2, { top: 20 });
  // }

  // attack1() {
  //   this.axe = true;
  //   TweenMax.to(this.wep.nativeElement, 1, { left: 60 });
  //   TweenMax.to(this.wep.nativeElement, 0.5, { rotationX: '360_w', rotationY: '-60_short' });
  // }
  // kill() {
  //   console.log('kill');
  //   TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '700_w', top: 150 });
  //   setTimeout(() => {
  //     this.finish();
  //     this.bloodMark = true;
  //   }, 500);
  // }
  // finish() {
  //   TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '60_short' });
  //   setTimeout(() => {
  //     this.done();
  //   }, 500);
  // }
  // done() {
  //   this.axe = false;
  //   setTimeout(() => {
  //     this.bloodMark = false;
  //   }, 1000);
  // }
}
