import {Quadrant} from "./quadrant/quadrant.model";

export class Board {
  private quadrants: Quadrant[][];

  constructor() {
    this.quadrants = [];
  }

  getQuadrants(): Quadrant[][] {
    return this.quadrants;
  }

  setQuadrants(quadrants: Quadrant[][]): void {
    this.quadrants = quadrants;
  }

  resetCellStates(): void {
    for (let row of this.quadrants) {
      for (let quadrant of row) {
        quadrant.resetCellStates();
      }
    }
  }
}

