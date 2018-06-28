import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';     // accordion and accordion tab
import { MenuItem } from 'primeng/api';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BoardComponent } from './board/board.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { PregameComponent } from './pregame/pregame.component';
import { PieceComponent } from './piece/piece.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RowComponent,
    CellComponent,
    PregameComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
