import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor() { }
  tranArrow() {
    $('#arrow').toggle();
    $('#arrow')
      .transition({
       animation: 'flash',
        reverse: 'true'
      })
    ;
  }

  ngOnInit() {
  }

}
