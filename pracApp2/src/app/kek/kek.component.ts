import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-kek',
  templateUrl: './kek.component.html',
  styleUrls: ['./kek.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%) rotateY(90deg)'
      })),
      state('enlarge', style({
        transform: 'scale(2.5)'
      })),
      state('spin', style({
        transform: 'rotateY(360deg) rotateZ(360deg)'
      })),
      transition('* => *', animate('1000ms ease'))
    ])
  ]
})
export class KekComponent implements OnInit {
  position: string;
  changePosition(newPosition: string) {
    this.position = newPosition;
  }
  constructor() { }

  ngOnInit() {
  }

}
