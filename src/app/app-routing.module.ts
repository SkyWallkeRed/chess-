import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { PregameComponent } from './pregame/pregame.component';
import { LoginComponent } from './login/login.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
