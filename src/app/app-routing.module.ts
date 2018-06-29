import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { PregameComponent } from './pregame/pregame.component';
import { LoginComponent } from './login/login.component';
import { LobbyComponent } from './lobby/lobby.component';
import { AboutComponent } from './about/about.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { TechComponent } from './tech/tech.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {
    path: 'play',
    component: BoardComponent
  },
  {
    path: '',
    component: PregameComponent
  },
  {
    path: 'home',
    component: PregameComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lobby',
    component: LobbyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contributors',
    component: ContributorsComponent
  },
  {
    path: 'tech',
    component: TechComponent
  },
  {
    path: 'subscribe',
    component: SubscribeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
