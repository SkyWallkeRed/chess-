import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.scss']
})
export class MobileHomeComponent implements OnInit {
  public userName;
  public userImg;
  private userLogedIn = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  // SETS THE BULIAN FOR THE DISPALY OF THE START BTN.
  loginTrue(bull) {
    this.userLogedIn = bull;
    this.setUserPreLobby();
  }
  // SET USER GIC AND NAME IN PREGAME.
  setUserPreLobby() {
    const t = this.userService.getUser();
    this.userName = t.userName;
    this.userImg = t.userImg;
  }
}
