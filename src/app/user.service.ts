import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;


  // LOGIN BLOCK.
  public loginObservable: Observable<any>;
  public loginSubject: Subject<any>;
  // END LOGIN BLOCK.
  constructor() {

    this.user = new User('', '', '', '', '');

  }


  setUser(user) {
    this.user = user;
    console.log(this.user);
  }
  getUser() {
    return this.user;
  }
}
