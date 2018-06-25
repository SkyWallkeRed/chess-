import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { GameService } from '../game.service';

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
  constructor(private gameService: GameService) {
  }
  ngOnInit() {
    this.cellColorF();
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    for (let i = 0; i < this.optionsArray.length; i++) {
      if (this.optionsArray[i].myX === this.myX) {
        if (this.optionsArray[i].myY === this.myY) {
          this.cell.nativeElement.className === 'glow cell' ?
            this.cell.nativeElement.className = ' cell' :
            this.cell.nativeElement.className = 'glow cell';
          this.currentOption = true;
        }
      } else if (this.currentOption === true) {
        this.cell.nativeElement.className = ' cell';
        this.currentOption = false;
      }
    }
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

  getOptions() {
    this.ngDoCheck();
    if (this.currentOption) {
      console.log(this.myX, this.myY);
      this.gameService.cetchOption(this.myX, this.myY);
    }
    // console.log(this.optionsArray);
    if (this.myPiece) {
      this.gameService.getOptions(this.myX, this.myY, this.myPiece);
      this.cell.nativeElement.className === 'glow cell' ?
        this.cell.nativeElement.className = ' cell' :
        this.cell.nativeElement.className = 'glow cell';
      this.currentOption = true;
    } else if (this.currentOption === true) {
      this.cell.nativeElement.className = ' cell';
      this.currentOption = false;
    }
  }
}

