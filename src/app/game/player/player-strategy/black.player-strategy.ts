import {PlayerStrategy} from "./player-strategy.interface";
import {Cell} from "../../board/quadrant/cell/cell.model";

export class BlackPlayerStrategy implements PlayerStrategy {
  placeMarble(cell: Cell): void {
    cell.placeBlackMarble();
  }

}
