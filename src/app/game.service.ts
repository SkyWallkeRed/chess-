import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public boardObservable: Observable<any>;
  public boardSubject: Subject<any>;
  boardArray: Array<any>;
  constructor() {
    this.boardArray = [
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
    ];
    this.boardSubject = new Subject<any>();
    this.boardObservable = this.boardSubject.asObservable();
    this.boardSubject.next(this.boardArray);

  }

}

