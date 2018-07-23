import { Component, OnInit, AfterContentInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
@Component({
  selector: 'uxsino-data-echarts',
  templateUrl: './data-echarts.component.html',
  styleUrls: ['./data-echarts.component.scss']
})
export class DataEchartsComponent implements OnInit, AfterContentInit {
  cardTable: Boolean = false;
  boxShow: Boolean = true;
  myOptions: any;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  type: String = 'line';
  constructor() { }

  ngOnInit() {
    this.options = {
      gridType: 'fixed',
      compactType: 'none',
      margin: 10,
      draggable: { /*是否可拖拽*/
        enabled: true
      },
      resizable: { /*是否可以缩放*/
        enabled: true,
        /*stop: AppComponent.eventStop*/
      },
      swap: true,
      pushItems: true,
      displayGrid: 'none'
    };
    this.dashboard = [
      { cols: 3, rows: 2, y: 0, x: 0, id: 'demo1', lable: 'Radar Title' },
    ];
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
  showCard() {
    this.cardTable = true;
  }
  deleteTab() {
    this.cardTable = false;
  }
  ShowLine() {
    this.boxShow = false;
  }
}
