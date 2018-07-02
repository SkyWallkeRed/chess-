import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './board/board.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { PregameComponent } from './pregame/pregame.component';
import { PieceComponent } from './piece/piece.component';
import { OfflineBoardComponent } from './offline-board/offline-board.component';
import { OnlineBoardComponent } from './online-board/online-board.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login';
import { LobbyComponent } from './lobby/lobby.component';
import { AboutComponent } from './about/about.component';
import { TechComponent } from './tech/tech.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ColorPickComponent } from './color-pick/color-pick.component';
import { ActivUsersComponent } from './activ-users/activ-users.component';
import { ActivGamesComponent } from './activ-games/activ-games.component';
import { PreWebLoaderComponent } from './pre-web-loader/pre-web-loader.component';
// LOADER
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { HttpClientModule } from '@angular/common/http';
import { PreGameAnimationComponent } from './pre-game-animation/pre-game-animation.component';
import { MobileHomeComponent } from './mobile-home/mobile-home.component';
// Configs .
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      // {
      //   id: FacebookLoginProvider.PROVIDER_ID,
      //   provider: new FacebookLoginProvider('Your-Facebook-app-id') // FB LOGIN IS BUGGY OFF FOR NOW .
      // },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('414685811338-kf94b9e51f4bpslpmmfkceuqlh1qqvt4.apps.googleusercontent.com')
      },


    ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RowComponent,
    CellComponent,
    PregameComponent,
    PieceComponent,
    OfflineBoardComponent,
    OnlineBoardComponent,
    LoginComponent,
    LobbyComponent,
    AboutComponent,
    TechComponent,
    ContributorsComponent,
    SubscribeComponent,
    ColorPickComponent,
    ActivUsersComponent,
    ActivGamesComponent,
    PreWebLoaderComponent,
    PreGameAnimationComponent,
    MobileHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.cubeGrid,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '50px',
      primaryColour: '#B086DC',
      secondaryColour: 'pink',
      tertiaryColour: '#ffffff'
    })

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
