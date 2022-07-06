import {CellState} from "./cell-state.interface";
import {Cell} from "../cell.model";
import {BlackCellState} from "./black.cell-state";
import {WhiteCellState} from "./white.cell-state";

export class EmptyCellState implements CellState{
  private context: Cell;

  constructor(context: Cell) {
    this.context = context;
  }

  setContext(context: Cell): void {
    this.context = context;
  }

  placeBlackMarble(): void {
    this.context.setCellState(new BlackCellState(this.context));
  }

  placeWhiteMarble(): void {
    this.context.setCellState(new WhiteCellState(this.context));
  }

  resetCellState(): void {
    console.log("Cell is already empty")
  }

}
