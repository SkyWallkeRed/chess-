

// ----------------------------------------------------------------------------------------------
import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { GameService } from '../game.service';
import { AnimateService } from '../animate.service';
// import { BaseAnimation } from '../Animation/baseAni';
import { TweenMax } from 'gsap';


@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  public cellColor = 'green';
  private currentOption = false;
  // private colo = this.cellColorF();
  @Input() myX;
  @Input() myY;
  @Input() myPiece;
  @Input() optionsArray;
  @ViewChild('cell') cell: ElementRef;
  @ViewChild('piece') piece: ElementRef;
  // ANIMATION BOOLS
  public animateKill = false;
  public killActive;
  private bloodMarkCell = false;
  private wep = false;
  private rect;
  constructor(private gameService: GameService, private animationService: AnimateService) {

  }
  ngOnInit() {
    this.cellColorF();


  }
  sendAnimationData() {
    this.rect = this.cell.nativeElement.getBoundingClientRect();
    this.animationService.setCurrentLocation(this.myPiece,
      {
        top: Math.floor(this.rect.top),
        right: Math.floor(this.rect.right),
        bottom: Math.floor(this.rect.bottom),
        left: Math.floor(this.rect.left)
      });

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.currentOption = false;
    for (let i = 0; i < this.optionsArray.length; i++) {
      if (this.optionsArray[i].myX === this.myX) {
        if (this.optionsArray[i].myY === this.myY) {
          this.cell.nativeElement.className = 'glow cell';
          this.currentOption = true;
        } else if (!this.currentOption) {
          this.cell.nativeElement.className = ' cell';
        }
      }
    }
    if (!this.currentOption) {
      this.cell.nativeElement.className = ' cell';

    }

  }

  checkValidOption() {
    if (this.currentOption) {
      // console.log(Math.floor(this.rect.top), Math.floor(this.rect.right), Math.floor(this.rect.bottom), Math.floor(this.rect.left));
      this.rect = this.cell.nativeElement.getBoundingClientRect();
      this.animationService.setNewPosition({
        top: Math.floor(this.rect.top),
        right: Math.floor(this.rect.right),
        bottom: Math.floor(this.rect.bottom),
        left: Math.floor(this.rect.left)
      });
      // console.log('animate');
      // console.log(this.piece)
      // TweenMax.to(this.piece.nativeElement, 0.5, { rotationX: '360_w' });
      // TweenMax.to(this.piece.nativeElement, 1, { bottom: 1000 });
      // SEND THE NEW POSITION TO SERVICE AND CHANGES THE BOARD
      // this.wep = true;

      // this.animateKill = true; // bubblwe down to Piece comp to do kill animation only when a move is chosen.
      // setTimeout(() => { // after timeOut turn bkill affect off.
      //   this.animateKill = false;
      //   console.log(this.animateKill)
      // }, 1000);
      this.gameService.catchOption(this.myX, this.myY);
      // setTimeout(() => {
      //   this.killActive = false;
      // }, 2000);
      // this.killActive = true;

    }
  }
  checkValidPiece() {
    if (this.myPiece) {
      this.gameService.getOptions(this.myX, this.myY, this.myPiece);
      // console.log(this.piece)
      // TweenMax.to(this.piece.nativeElement, 0.5, { rotationX: '360_w' });
      this.sendAnimationData();
    }
  }

  getOptions() {

    // this.wep = true;
    // console.log(this.piece.nativeElement);
    // this.ngDoCheck();
    this.checkValidOption();
    this.checkValidPiece();
  }

  cellColorF() {
    const t = this.myX + this.myY;
    if (t % 2 === 0) {
      this.cellColor = 'white';
      return 'white';
    } else {
      this.cellColor = 'black';
      return '#777777';
    }
  }
  thisCellBloodMark($event) {
    // console.log($event);
    if ($event) {
      // ANIMATION CELL BLOOD MARK PROBLEM = MARK ALL CELLS NEED FIX.
      // this.bloodMarkCell = true;
    }
  }
}
