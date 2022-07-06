import {CellState} from "./cell-states/cell-state.interface";
import {EmptyCellState} from "./cell-states/empty.cell-state";

export class Cell {
  private cellState: CellState;

  constructor(private quadrantRow: number,
              private quadrantColumn: number,
              private cellRow: number,
              private cellColumn: number) {
    this.cellState = new EmptyCellState(this);
  }

  getQuadrantRow(): number {
    return this.quadrantRow
  }

  getQuadrantColumn(): number {
    return this.quadrantColumn;
  }

  getCellRow(): number {
    return this.cellRow;
  }

  getCellColumn(): number {
    return this.cellColumn;
  }

  getCoordinatesAsString(): string {
    return `${this.quadrantRow} ${this.quadrantColumn} ${this.cellRow} ${this.cellColumn}`
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
