import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { PregameComponent } from './pregame/pregame.component';
import { OfflineBoardComponent } from './offline-board/offline-board.component';
import { OnlineBoardComponent } from './online-board/online-board.component';

const routes: Routes = [
  {
    path: 'play',
    component: OnlineBoardComponent
  },
  {
    path: 'local',
    component: OfflineBoardComponent
  },
  {
    path: '',
    component: PregameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
