import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './game/board/board.component';
import { QuadrantComponent } from './game/board/quadrant/quadrant.component';
import { CellComponent } from './game/board/quadrant/cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    QuadrantComponent,
    CellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
