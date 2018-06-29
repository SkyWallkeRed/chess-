import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  private allUsers: Array<User>; // NEED TO MAKE AN OBSERVBLE WITH A USER API SO IT WILL GET UPDEATED .

  // LOGIN BLOCK.
  public loginObservable: Observable<any>;
  public loginSubject: Subject<any>;
  // END LOGIN BLOCK.
  constructor() {
    this.allUsers = [];
    this.user = new User('', '', '', '', '');
    this.allUsers.push(this.user);
  }


  setUser(user) {
    this.user = user; // NEED MORE WORK NOT SURE HOW SERVER SIDE WILL BE SET UP .
    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.allUsers[i].user_id !== this.user.user_id) {
        this.allUsers.push(this.user);
      }
    }
  }
  getUser() {
    return this.user;
  }
  getAllUses() {
    return this.allUsers;
  }
}
