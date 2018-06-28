
import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user; // .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. NEED TO MAKE A USER MODEL .
  constructor(private socialAuthService: AuthService) { }
  ngOnInit() { }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ', userData);
        // Now sign-in with userData >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> GOOGLE LOGIN DATA<<>.
        this.user = new User(userData.id, userData.name, userData.email, userData.image, userData.provider);
        console.log(this.user);

      }
    ).then(); // AFTER LOGIN.
  }

}
