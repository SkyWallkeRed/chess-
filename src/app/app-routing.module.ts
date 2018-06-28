import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { PregameComponent } from './pregame/pregame.component';
import { LoginComponent } from './login/login.component';
import { LobbyComponent } from './lobby/lobby.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
