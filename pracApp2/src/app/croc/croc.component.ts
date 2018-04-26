import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-croc',
  templateUrl: './croc.component.html',
  styleUrls: ['./croc.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(100%) rotateY(360deg)'
      })),
      state('enlarge', style({
        transform: 'scale(2.5)'
      })),
      state('spin', style({
        transform: 'rotateY(360deg) rotateZ(180deg)'
      })),
      transition('* => *', animate('1000ms ease'))
    ])
  ]
})
export class CrocComponent implements OnInit {

  constructor() { }
  position: string;


  changePosition(newPosition: string) {
    this.position = newPosition;
  }
  ngOnInit() {
  }

}
