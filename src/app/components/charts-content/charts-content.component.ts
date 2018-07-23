import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uxsino-charts-content',
  templateUrl: './charts-content.component.html',
  styleUrls: ['./charts-content.component.scss']
})
export class ChartsContentComponent implements OnInit {
  @Input() boxShow: Boolean;


  constructor() { }

  ngOnInit() {

  }
  changedash(event) {
    console.log(event);
  }
}
