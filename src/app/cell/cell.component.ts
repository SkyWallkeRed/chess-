import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
@Input() cellColor;
@Input() myX
@Input() myY
  // private cellColor = 'white';
  constructor() { }

  ngOnInit() {
  }


}
