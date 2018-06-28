import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';     // accordion and accordion tab
import { MenuItem } from 'primeng/api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './board/board.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { PregameComponent } from './pregame/pregame.component';
import { PieceComponent } from './piece/piece.component';


import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';
import { LoginComponent } from './login/login.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('Your-Facebook-app-id')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('Your-Google-Client-Id')
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    SocialLoginModule

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
