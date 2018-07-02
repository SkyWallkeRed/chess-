import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-activ-users',
  templateUrl: './activ-users.component.html',
  styleUrls: ['./activ-users.component.scss']
})
export class ActivUsersComponent implements OnInit {
  private activUsers: Array<User>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    const activUsers = this.userService.getAllUses(); // NEED TO SUBSCRIBE TO ALL USERS SUBJECT .
    this.activUsers = activUsers;
  }

}
