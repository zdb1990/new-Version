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
      displayGrid: 'none'
    };
    this.dashboard = [
      { cols: 2, rows: 2, y: 0, x: 0, id: 'demo1' },
      { cols: 2, rows: 2, y: 0, x: 2, id: 'demo2' }
    ];
  }
  ngAfterContentInit() {
    this.echartsone = {
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: [
            { value: 235, name: '视频广告' },
            { value: 274, name: '联盟广告' },
            { value: 310, name: '邮件营销' },
            { value: 335, name: '直接访问' },
            { value: 400, name: '搜索引擎' }
          ]
        }
      ]
    };
    this.echartstwo = {
    }
  }
  onChartInit(e: any, i: number) {
    if (i === 0) {
      this.echartsInstance1 = e;
    } else if (i === 1) {
      this.echartsInstance2 = e;
    }
  }
}
