import { Component, OnInit } from '@angular/core';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from '../../../node_modules/gsap/all';
import { ElementRef, ViewChild } from '@angular/core';
import { TweenMax } from 'gsap';


export class BaseAnimation {
    private t: string;
    @ViewChild('type') type: ElementRef;
    @ViewChild('wep') wep: ElementRef;
    @ViewChild('blood') blood: ElementRef;
    private bloodMark = false;
    private axe = false;
    private status = false;
    private tl = new TimelineMax();
    private color: string;
    private ele: string;
    constructor(type: ElementRef, color: string) {
        // this.type = type;
        this.color = color;
        this.ele = this.type.toString();
        // console.log(this.color);
        // console.log(this.type);
        // console.log(this.ele);


    }


    jump() {
        this.status = !this.status;
        this.tl.to(this.type.nativeElement, 0.2, { bottom: 20 }).to(this.type.nativeElement, 0.2, { top: 20 });
    }

    attack1() {
        this.axe = true;
        TweenMax.to(this.wep.nativeElement, 1, { left: 60 });
        TweenMax.to(this.wep.nativeElement, 0.5, { rotationX: '360_w', rotationY: '-60_short' });
    }
    kill() {
        // console.log('kill');
        TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '700_w', top: 150 });
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
