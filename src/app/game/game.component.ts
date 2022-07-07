import {Component, OnInit} from '@angular/core';
import {Board} from "./board/board.model";
import {Cell} from "./board/quadrant/cell/cell.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private readonly QUADRANTS_PER_BOARD: number = 4;
  private readonly ROWS_PER_QUADRANT: number = 3;
  private readonly CELLS_PER_ROW: number = 3;

  board: Board;

  constructor() {
    this.board = new Board();
  }

  ngOnInit(): void {
    this.buildEmptyBoard();
  }

  private buildEmptyBoard(): void {
    let board: Cell[][][] = this.buildQuadrants();
    this.board.setBoard(board);
  }

  private buildQuadrants(): Cell[][][] {
    let quadrants: Cell[][][] = [];

    for (let x = 0; x < this.QUADRANTS_PER_BOARD; x++) {
      let quadrant: Cell[][] = this.buildQuadrant(x);
      quadrants.push(quadrant);
    }

    return quadrants;
  }

  private buildQuadrant(x: number): Cell[][] {
    let quadrant: Cell[][] = [];

    for (let y = 0; y < this.ROWS_PER_QUADRANT; y++) {
      let row: Cell[] = this.buildRow(x, y);
      quadrant.push(row);
    }

    return quadrant;
  }

  private buildRow(x: number, y: number): Cell[] {
    let row: Cell[] = [];

    for (let z = 0; z < this.CELLS_PER_ROW; z++) {
      let cell: Cell = new Cell(x, y, z);
      row.push(cell);
    }

    return row;
  }
}
