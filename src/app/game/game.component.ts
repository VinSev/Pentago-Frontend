import {Component, OnInit} from '@angular/core';
import {Board} from "./board/board.model";
import {Quadrant} from "./board/quadrant/quadrant.model";
import {Cell} from "./board/quadrant/cell/cell.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private readonly QUADRANT_ROWS_PER_BOARD: number = 2;
  private readonly QUADRANTS_PER_ROW: number = 2;
  private readonly CELL_ROWS_PER_QUADRANT: number = 3;
  private readonly CELLS_PER_ROW: number = 3

  board: Board;

  constructor() {
    this.board = new Board();
  }

  ngOnInit(): void {
    this.buildEmptyBoard();
  }

  private buildEmptyBoard(): void {
    let quadrants: Quadrant[][] = this.buildQuadrants();
    this.board.setQuadrants(quadrants);
  }

  private buildQuadrants(): Quadrant[][] {
    let quadrants: Quadrant[][] = [];

    for (let row = 0; row < this.QUADRANT_ROWS_PER_BOARD; row++) {
      let quadrantRow = [];

      for (let column = 0; column < this.QUADRANTS_PER_ROW; column++) {
        quadrantRow.push(this.buildQuadrant(row, column));
      }

      quadrants.push(quadrantRow);
    }

    return quadrants;
  }

  private buildQuadrant(row: number, column: number): Quadrant {
    let quadrant: Quadrant = new Quadrant();
    let cells: Cell[][] = this.buildCells(row, column);

    quadrant.setCells(cells);

    return quadrant;
  }

  private buildCells(quadrantRow: number, quadrantColumn: number): Cell[][] {
    let cells: Cell[][] = [];

    for (let row = 0; row < this.CELL_ROWS_PER_QUADRANT; row++) {
      let cellRow: Cell[] = [];

      for (let column = 0; column < this.CELLS_PER_ROW; column++) {
        cellRow.push(new Cell(quadrantRow, quadrantColumn, row, column));
      }

      cells.push(cellRow);
    }

    return cells;
  }
}
