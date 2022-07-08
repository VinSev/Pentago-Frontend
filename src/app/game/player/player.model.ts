import {PlayerStrategy} from "./player-strategy/player-strategy.interface";
import {Cell} from "../board/quadrant/cell/cell.model";

export class Player {
  playerStrategy: PlayerStrategy;

  constructor(playerState: PlayerStrategy) {
    this.playerStrategy = playerState;
  }

  setPlayerState(playerStrategy: PlayerStrategy): void {
    this.playerStrategy = playerStrategy;
  }

  placeMarble(cell: Cell): void {
    this.playerStrategy.placeMarble(cell);
  }
}
