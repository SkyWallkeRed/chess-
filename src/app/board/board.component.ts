import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardArray : Array<any>;
  constructor(private gameService: GameService) {
    debugger
    this.getBoard()
  }

  ngOnInit() {
    this.gameService.getData()          
    this.gameService.boardObservable.subscribe((data)=>{
    this.gameService.getData()      
      console.log('test')
      this.boardArray = data
    })
  }
  getBoard(){
    this.gameService.getData()          
    this.gameService.boardObservable.subscribe((data)=>{
    this.gameService.getData()      
      console.log('test')
      this.boardArray = data
    })
  }

}



