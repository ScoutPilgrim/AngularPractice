import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-donald',
  templateUrl: './donald.component.html',
  styleUrls: ['./donald.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%) rotateY(360deg)'
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
export class DonaldComponent implements OnInit {

  constructor() { }

  position: string;


  changePosition(newPosition: string) {
    this.position = newPosition;
  }

  ngOnInit() {
  }

}
