import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { PregameComponent } from './pregame/pregame.component';
import { OfflineBoardComponent } from './offline-board/offline-board.component';
import { OnlineBoardComponent } from './online-board/online-board.component';
import { LoginComponent } from './login/login.component';
import { LobbyComponent } from './lobby/lobby.component';
import { AboutComponent } from './about/about.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { TechComponent } from './tech/tech.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PreWebLoaderComponent } from './pre-web-loader/pre-web-loader.component';
import { MobileHomeComponent } from './mobile-home/mobile-home.component';


const routes: Routes = [
  {
    path: 'play',
    component: OnlineBoardComponent
  },
  {
    path: 'play2',
    component: OnlineBoardComponent
  },
  {
    path: 'local',
    component: OfflineBoardComponent
  },
  {
    path: '',
    component: PreWebLoaderComponent
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
  },
  {
    path: 'mobileHome',
    component: MobileHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
