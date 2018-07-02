import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GameSocketService {
  messages: Subject<any>;
  rooms : Subject<any>;
  // messagesObs : Observable<any>;
  
  constructor(private wsService: WebSocketService) {
    // this.messages = new Subject()
    // this.messagesObs = this.messages.asObservable()
    this.rooms = <Subject<any>>wsService
    .newRoom()
    .pipe(
      map((response: any): any => {
      return response;
    }))
    
    this.messages = <Subject<any>>wsService
      .connect()
      .pipe(
        map((response: any): any => {
        return response;
      }))


   }
   
  
  sendMsg(msg) {
    this.messages.next(msg);
  }
  makeRoom(msg){
    this.rooms.next(msg)
  }


};
