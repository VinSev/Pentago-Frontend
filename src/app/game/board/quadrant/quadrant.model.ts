import {Cell} from "./cell/cell.model";

export class Quadrant {
  private cells: Cell[][];

  constructor() {
    this.cells = [];
  }

  getCells(): Cell[][] {
    return this.cells;
  }

  setCells(cells: Cell[][]): void {
    this.cells = cells;
  }

  resetCellStates(): void {
    for (let row of this.cells) {
      for (let cell of row) {
        cell.resetCellState();
      }
    }
  }

  rotateCellsClockwise(): void {
    this.transpose();
    this.reverseRows()
  }

  rotateCellsCounterClockwise(): void {
    this.transpose();
    this.reverseColumns();
  }

  transpose(): void {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = i + 1; j < this.cells.length; j++) {
        let temp: Cell = this.cells[i][j];
        this.cells[i][j] = this.cells[j][i];
        this.cells[j][i] = temp;
      }
    }
  }

  reverseRows(): void {
    for (let i = 0; i < this.cells.length; i++) {
      for (let low = 0, high = this.cells.length - 1; low < high; low++, high--) {
        let temp: Cell = this.cells[i][low];
        this.cells[i][low] = this.cells[i][high];
        this.cells[i][high] = temp;
      }
    }
  }

  reverseColumns(): void {
    for (let i = 0; i < this.cells.length; i++) {
      for (let low = 0, high = this.cells.length - 1; low < high; low++, high--) {
        let temp: Cell = this.cells[low][i];
        this.cells[low][i] = this.cells[high][i];
        this.cells[high][i] = temp;
      }
    }
  }

}
