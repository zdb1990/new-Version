import { Component, OnInit, Input } from '@angular/core';

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

}
