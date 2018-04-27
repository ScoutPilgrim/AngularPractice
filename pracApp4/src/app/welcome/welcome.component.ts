import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

declare var $: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'rotateZ(360deg)'
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
export class WelcomeComponent implements OnInit {
  position: string;
  constructor() { }
  toggleMenu() {
    $('#but').transition('bounce');
    if ( $('#menu').css('display') === 'none' ) {
      $('#menu').transition(' slide down');
    } else {
      $('#menu').transition({
        animation : 'fade',
        reverse : 'true'
      });
    }
  }
  changePosition(newPosition: string) {
    this.position = newPosition;
  }

  ngOnInit() {
  }

}
