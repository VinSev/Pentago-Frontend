import {Cell} from "../../board/quadrant/cell/cell.model";

export interface PlayerStrategy {
  placeMarble(cell: Cell): void;
}
