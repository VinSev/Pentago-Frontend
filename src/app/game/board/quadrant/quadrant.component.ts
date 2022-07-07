import {Component, Input} from '@angular/core';
import {Cell} from "./cell/cell.model";

@Component({
  selector: 'app-quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.css']
})
export class QuadrantComponent {
  @Input()
  quadrant: Cell[][] = [];

  rotateCellsClockwise(): void {
    this.transpose();
    this.reverseRows()
  }

  rotateCellsCounterClockwise(): void {
    this.transpose();
    this.reverseColumns();
  }

  transpose(): void {
    for (let i = 0; i < this.quadrant.length; i++) {
      for (let j = i + 1; j < this.quadrant.length; j++) {
        let temp: Cell = this.quadrant[i][j];
        this.quadrant[i][j] = this.quadrant[j][i];
        this.quadrant[j][i] = temp;
      }
    }
  }

  reverseRows(): void {
    for (let i = 0; i < this.quadrant.length; i++) {
      for (let low = 0, high = this.quadrant.length - 1; low < high; low++, high--) {
        let temp: Cell = this.quadrant[i][low];
        this.quadrant[i][low] = this.quadrant[i][high];
        this.quadrant[i][high] = temp;
      }
    }
  }

  reverseColumns(): void {
    for (let i = 0; i < this.quadrant.length; i++) {
      for (let low = 0, high = this.quadrant.length - 1; low < high; low++, high--) {
        let temp: Cell = this.quadrant[low][i];
        this.quadrant[low][i] = this.quadrant[high][i];
        this.quadrant[high][i] = temp;
      }
    }
  }
}
