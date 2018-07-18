import { Component, OnInit, AfterContentInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
@Component({
  selector: 'uxsino-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit, AfterContentInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  public echartsInstance1: any;
  public echartsInstance2: any;
  echartsone: any;
  echartstwo: any;

  constructor() { }

  ngOnInit() {
    let self = this;
    this.options = {
      gridType: 'fixed',
      compactType: 'none',
      // // 当元素改变时
      itemChangeCallback: function (item, itemComponent) {
        let echarts = document.getElementById(`${item.id}`);

        if (echarts) {
          echarts.style.width = itemComponent.width + 'px';
          echarts.style.height = itemComponent.height - 30 + 'px';
          let dom = { 'demo1': self.echartsInstance1, 'demo2': self.echartsInstance2 };
          dom[item.id].resize();
        }
      },
      itemResizeCallback: function (item, itemComponent) {
        let echarts = document.getElementById(`${item.id}`);

        if (echarts) {
          echarts.style.width = itemComponent.width + 'px';
          echarts.style.height = itemComponent.height - 30 + 'px';
          let dom = { 'demo1': self.echartsInstance1, 'demo2': self.echartsInstance2 };
          dom[item.id].resize();
        }
      },
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
      displayGrid: 'always'
    };
    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0, id: 'demo1' },
      { cols: 2, rows: 1, y: 0, x: 2, id: 'demo2' }
    ];
  }
  ngAfterContentInit() {
    this.echartsone = {
      title: {
        id: 1,
        text: 'center1数据中心'
        link: 'http://localhost:5200/home-page/overview-page',
        target: 'self',
        textStyle: {
          color: '#333',
          // fontSize: 30,
          align: 'right',
          width: '100%'
        },
        subtext: '统计',
        padding: 20,
        left: 'center'
      },
      legend: {
        type: 'scroll'
      }
    };
    this.echartstwo = {
    };
  }
  onChartInit(e: any, i: number) {
    if (i === 0) {
      this.echartsInstance1 = e;
    } else if (i === 1) {
      this.echartsInstance2 = e;
    }
  }
}
