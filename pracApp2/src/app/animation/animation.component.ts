import {Component, OnInit, Directive, HostBinding, Input, HostListener} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
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


export class AnimationComponent implements OnInit {

  constructor() {}

  position: string;


  changePosition(newPosition: string) {
    this.position = newPosition;
}

  ngOnInit() {
  }

}

