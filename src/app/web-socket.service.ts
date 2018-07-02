import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
// import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket;

  constructor() { }

  connect() {
    this.socket = io(environment.ws_url);

    const observable = new Observable(observer => { // CHANGE THIS SHADOW NAME ASK LIOR.
      this.socket.on('message', (data) => {
        // console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    const observer = {
      next: (data: Object) => {
        console.log("what")
        this.socket.emit('message', JSON.stringify(data));
      },
    };

    return Subject.create(observer, observable);
  }
  newRoom() {
    this.socket = io(environment.ws_url);

    const observable2 = new Observable(observer2 => { // CHANGE THIS SHADOW NAME ASK LIOR.
      this.socket.on('room', (data) => {
        //we never get here for some reason. this subs to the emitting to room and in the gameservice we sub to this obs     
        debugger 
        let gameId = JSON.parse(data)
        console.log('data please');   
        observer2.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    const observer2 = {
      next: (data: Object) => {
        //this is happening. the event occurs but the event listener above doesnt invoke
        this.socket.emit('room', JSON.stringify(data));
      },
    };

    return Subject.create(observer2, observable2);
  }
}
