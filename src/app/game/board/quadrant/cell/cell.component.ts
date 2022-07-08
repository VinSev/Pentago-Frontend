import {Component, Input} from '@angular/core';
import {Cell} from "./cell.model";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input()
  cell?: Cell;

  placeMarble(): void {
    this.cell?.placeWhiteMarble();
  }

}
