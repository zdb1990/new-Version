import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
@Component({
  selector: 'uxsino-data-echarts',
  templateUrl: './data-echarts.component.html',
  styleUrls: ['./data-echarts.component.scss']
})
export class DataEchartsComponent implements OnInit {
  cardTable: Boolean = false;
  boxShow: Boolean = true;
  myOptions: any;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

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



  showCard() {
    this.cardTable = true;
  }

  dispach(event) {
    console.log(event);
    this.dashboard = event;
    // this.boxShow = false;
  }

}
