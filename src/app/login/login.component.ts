import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginErr = true;
  public userImg;
  @Output() showErr: EventEmitter<any> = new EventEmitter();


  constructor(private socialAuthService: AuthService, private userService: UserService) { }
  ngOnInit() { }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == 'facebook') {
      // socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        // Now sign-in with userData >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> GOOGLE LOGIN DATA<<>.
        const user = new User(userData.id, userData.name, userData.email, userData.image, userData.provider);
        this.userService.setUser(user);
        console.error('valif login');
        this.loginErr = false;
        this.showErr.emit(true);
      }
    ).then(); // AFTER LOGIN.
  }

}
