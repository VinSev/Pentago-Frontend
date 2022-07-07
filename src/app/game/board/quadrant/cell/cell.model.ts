import {CellState} from "./cell-states/cell-state.interface";
import {EmptyCellState} from "./cell-states/empty.cell-state";

export class Cell {
  private cellState: CellState;

  constructor(private x: number,
              private y: number,
              private z: number) {
    this.cellState = new EmptyCellState(this);
  }

  getCoordinates(): number[] {
    return [this.x, this.y, this.z];
  }

  setCellState(cellState: CellState): void {
    this.cellState = cellState;
  }

  getCellState(): CellState {
    return this.cellState
  }

  placeBlackMarble(): void {
    this.cellState.placeBlackMarble();
  }
  placeWhiteMarble(): void {
    this.cellState.placeWhiteMarble();
  }
  resetCellState(): void {
    this.cellState.resetCellState();
  }
}
