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
        this.socket.emit('message', JSON.stringify(data));
      },
    };

    return Subject.create(observer, observable);
  }
}
