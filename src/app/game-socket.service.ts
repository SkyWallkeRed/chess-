import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GameSocketService {
  messages: Subject<any>;
  messagesObs : Observable<any>;
  
  // Our constructor calls our wsService connect method
  constructor(private wsService: WebSocketService) {
    // this.messages = new Subject()
    // this.messagesObs = this.messages.asObservable()
    this.messages = <Subject<any>>wsService
      .connect()
      .pipe(
        map((response: any): any => {
        return response;
      }))
   }
  
  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }


};
