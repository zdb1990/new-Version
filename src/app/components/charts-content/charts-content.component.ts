import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'uxsino-charts-content',
  templateUrl: './charts-content.component.html',
  styleUrls: ['./charts-content.component.scss']
})
export class ChartsContentComponent implements OnInit, AfterContentInit {
  @Input() boxShow;
  @Input() dashboard: any;
  @Output() dispach = new EventEmitter();
  myOptions: any;
  type: String = 'line';
  cardTable: Boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.dashboard);
  }
  ShowLine() {
    this.boxShow = false;
  }
  ngAfterContentInit() {
    this.myOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: this.type
      }]
    }
  }
  changedash(event) {
    if (event === '返回') {
      this.boxShow = true;
    } else if (event === '查看') {
      this.dispach.emit([{ cols: 5, rows: 2, y: 0, x: 0, id: 'demo1', lable: 'Radar Title' }]);
    }
  }
  deleteTab() {
    this.cardTable = false;
  }
}
