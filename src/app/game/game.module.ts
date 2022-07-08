import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponent} from "./game.component";
import {BoardComponent} from "./board/board.component";
import {QuadrantComponent} from "./board/quadrant/quadrant.component";
import {CellComponent} from "./board/quadrant/cell/cell.component";



@NgModule({
    declarations: [
        GameComponent,
        BoardComponent,
        QuadrantComponent,
        CellComponent
    ],
    exports: [
        GameComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GameModule { }
