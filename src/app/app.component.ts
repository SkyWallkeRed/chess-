import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { GameSocketService } from './game-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socket; 

  constructor(private gameSocket : GameSocketService) {
    this.socket = io();
  }

  title = 'app';
}
