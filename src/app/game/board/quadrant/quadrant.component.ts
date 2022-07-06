import {Component, Input} from '@angular/core';
import {Quadrant} from "./quadrant.model";

@Component({
  selector: 'app-quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.css']
})
export class QuadrantComponent {
  @Input()
  quadrant?: Quadrant

}
