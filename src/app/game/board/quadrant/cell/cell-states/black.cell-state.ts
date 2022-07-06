import {CellState} from "./cell-state.interface";
import {Cell} from "../cell.model";
import {EmptyCellState} from "./empty.cell-state";

export class BlackCellState implements CellState {
  private context: Cell;

  constructor(context: Cell) {
    this.context = context;
  }

  setContext(context: Cell): void {
    this.context = context;
  }

  placeBlackMarble(): void {
    console.log("Can't place because cell is already filled")
  }

  placeWhiteMarble(): void {
    console.log("Can't place because cell is already filled")
  }

  resetCellState(): void {
    this.context.setCellState(new EmptyCellState(this.context));
  }
}
