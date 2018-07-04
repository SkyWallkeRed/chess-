import { Component, OnInit } from '@angular/core';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from '../../../node_modules/gsap/all';
import { ElementRef, ViewChild } from '@angular/core';
import { TweenMax } from 'gsap';
import { UserService } from '../user.service';
import { AnimateService } from '../animate.service';
// import { flatten } from '@angular/router';

@Component({
  selector: 'app-pregame',
  templateUrl: './pregame.component.html',
  styleUrls: ['./pregame.component.scss']
})
export class PregameComponent implements OnInit {
  // ANIMATION VARS .
  private tl = new TimelineMax();
  private tl1 = new TimelineMax();
  private tl2 = new TimelineMax();
  private tl3 = new TimelineMax();
  private tl4 = new TimelineMax();
  private tl5 = new TimelineMax({ repeat: -1 });
  private tlLoop = new TimelineMax({ repeat: -1 });
  //          'CHESS'.
  @ViewChild('textLeft') textLeft: ElementRef;
  //         'SAME OLD'.
  @ViewChild('textRight') textRight: ElementRef;
  //         EPIC.
  @ViewChild('epic') epic: ElementRef;
  @ViewChild('container') container: ElementRef;
  //     ALL ELEMENTS EXEPT ANIMATION BOX
  @ViewChild('header') header: ElementRef;
  // ANIMATION CONTAINER
  @ViewChild('animationBox') animationBox: ElementRef;
  @ViewChild('k') k: ElementRef;
  @ViewChild('wep') wep: ElementRef;
  @ViewChild('blood') blood: ElementRef;
  // END ANIMATION CONTAINER
  @ViewChild('play') play: ElementRef;
  //          ABOUT
  @ViewChild('btn1') btn1: ElementRef;
  //         CONTRIBUTORS
  @ViewChild('btn2') btn2: ElementRef;
  //          TECH
  @ViewChild('btn3') btn3: ElementRef;
  // OUT OF USE , CAN BE USED .
  @ViewChild('btn4') btn4: ElementRef;
  //        APP-LOGIN
  @ViewChild('loginF') loginF: ElementRef;
  // PISES LEFT SIDE .
  @ViewChild('piece1') piece1: ElementRef;
  @ViewChild('piece2') piece2: ElementRef;
  @ViewChild('piece3') piece3: ElementRef;
  @ViewChild('piece4') piece4: ElementRef;
  @ViewChild('gitHub') gitHub: ElementRef;
  //         START .bad name i know.
  @ViewChild('lobby') lobby: ElementRef;
  // animation ------------------------------------NEED TO MAKE ANIMATION IN SEPERATE COMPONENT AND INJECT--- .
  public bloodMark2 = false;
  private bloodMark = false;
  public axe = false;
  private status = false;
  // private playAnimation = true;
  //  AFTER LOGIN SHOW USER DATA .
  private userImg;
  private userName;
  // if user loged in show start btn.
  private userLogedIn = false;
  // BULIAN VAL FOR HTML ERR MSG.
  // private loginErr = false;
  // ABOUT window
  private about = false;
  // CONTRIBUTORS window
  private contributors = false;
  // TECH window
  private tech = false;
  constructor(private userService: UserService, private aniService: AnimateService) {
  }
  ngOnInit() {
    this.buildHome();
  }
  buildHome() {
    // this.aniService.audio.play();
    setTimeout(() => {
      // this.aniService.epicGong.play();
    }, 3000);
    // landing page animation TimeLine
    this.tl.
      // to(this.textRight.nativeElement, 0.3, { scale: 1, opacity: 1 }).
      // to(this.textRight.nativeElement, 0.3, { top:  50, opacity: 1, left: 450 }).
      to(this.textLeft.nativeElement, 0.3, { top: 50, opacity: 1, left: 770 }).
      to(this.epic.nativeElement, 0.3, { top: -200, left: 150, scale: 0.5 }).
      to(this.epic.nativeElement, 0.3, { top: -200, left: 200, opacity: 1, scale: 0.5 });
    // to(this.textRight.nativeElement, 0.3, { top: 830, opacity: 1, left: 250, rotation: '90_w' }).
    // to(this.textRight.nativeElement, 0.5, { top: 500, opacity: 0 });
    // this.tl1.to(this.textRight.nativeElement, 0.3, { top: 330, opacity: 0, left: 350, rotation: '20_w' }).
    this.tl3.to(this.animationBox.nativeElement, 1.2, { top: 600, opacity: 1, left: 50 });
    // to(this.textLeft.nativeElement, 0.5, { left: 450, opacity: 1, top: 50 }).
    // to(this.textRight.nativeElement, 0.5, { left: 450, opacity: 1, top: 200, rotation: '10_W' }).
    this.tl4.to(this.loginF.nativeElement, 0.3, { left: 550, opacity: 1, top: 500 }).
      to(this.piece1.nativeElement, 0.2, { left: -440, top: 110, opacity: 1 }).
      to(this.piece1.nativeElement, 1, { left: -900 }).
      to(this.piece2.nativeElement, 0.2, { left: -500, top: 110, opacity: 1 }).
      to(this.piece2.nativeElement, 1, { left: -900 }).
      to(this.piece3.nativeElement, 0.2, { left: -550, top: 110, opacity: 1 }).
      to(this.piece3.nativeElement, 1, { left: -900 });


    setTimeout(() => {
      this.animate();
      setTimeout(() => {
        this.bloodMark2 = true;
      }, 1000);
      this.axe = true;
    }, 1000);
    this.tl2.to(this.gitHub.nativeElement, 0.3, { right: 400, bottom: 400, opacity: 1 }).
      to(this.btn1.nativeElement, 0.3, { left: 400, opacity: 1, top: 720 }).
      to(this.btn2.nativeElement, 0.3, { left: 600, opacity: 1, top: 720 }).
      to(this.btn3.nativeElement, 0.3, { left: 900, opacity: 1, top: 720 });

    // to(this.btn4.nativeElement, 0.3, { left: 560, opacity: 1, top: 636 });
    TweenMax.to(this.piece4.nativeElement, 2, { top: 600, left: -200 });
    this.tl5.to(this.piece4.nativeElement, 3, { left: 350 }).
      to(this.piece2.nativeElement, 1.5, { left: 450 }).
      to(this.piece1.nativeElement, 1.8, { left: 500 }).
      to(this.piece4.nativeElement, 1.6, { left: 1200 }).
      to(this.piece3.nativeElement, 1.7, { left: 400 }).
      to(this.piece4.nativeElement, 1.6, { left: -900 }).
      to(this.piece3.nativeElement, 1.9, { left: -900 }).
      to(this.piece2.nativeElement, 1.4, { left: -900 }).
      to(this.piece1.nativeElement, 1.7, { left: -900 });
  }
  // ANIMATION BOX .
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
        }, 100);
      }, 200);
      this.bloodMark = true;
    }, 500);
  }
  // SETS THE BULIAN FOR THE DISPALY OF THE START BTN.
  loginTrue(bull) {
    this.userLogedIn = bull;
    this.setUserPreLobby();
  }
  // SET USER GIC AND NAME IN PREGAME.
  setUserPreLobby() {
    const t = this.userService.getUser();
    this.userName = t.userName;
    this.userImg = t.userImg;
  }
  // TOGGELING .
  toggleAbout() {
    if (!this.about) {
      this.about = true;
      this.contributors = false;
      this.tech = false;
    } else if (this.about) {
      this.about = false;
    }
  }
  toggleContributors() {
    if (!this.contributors) {
      this.contributors = true;
      this.tech = false;
      this.about = false;
    } else if (this.contributors) {
      this.contributors = false;
    }
  }
  toggleTech() {
    if (!this.tech) {
      this.tech = true;
      this.contributors = false;
      this.about = false;
    } else if (this.tech) {
      this.tech = false;
    }
  }
}
