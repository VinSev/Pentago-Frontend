import {Cell} from "./quadrant/cell/cell.model";

export class Board {
  private board: Cell[][][];

  constructor() {
    this.board = [];
  }

  getBoard(): Cell[][][] {
    return this.board;
  }

  setBoard(board: Cell[][][]): void {
    this.board = board;
  }

  getQuadrant(id: number): Cell[][] {
    return this.board[id];
  }

  getCell(x: number, y: number, z: number): Cell {
    return this.board[x][y][z];
  }

  resetCellStates(): void {
    for (let quadrant of this.board) {
      for (let row of quadrant) {
        for (let cell of row) {
          cell.resetCellState();
        }
      }
    }
  }

}
