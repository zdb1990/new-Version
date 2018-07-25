import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { AuthService } from '../../common/auth/auto.service';
import { CookieService } from 'ngx-cookie-service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
@Component({
  selector: 'uxsino-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit, AfterContentInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  public echartsInstance1: any;
  public echartsInstance2: any;
  echartsOption1: any;
  echartsOption2: any;
  constructor() { }

  ngOnInit() {
    let self = this;
    this.options = {
      gridType: 'fixed',
      compactType: 'none',
      // // 当元素改变时
      itemChangeCallback: function (item, itemComponent) {
        console.log(itemComponent);
        let echarts = document.getElementById(`${item.id}`);

        if (echarts) {
          echarts.style.width = itemComponent.width - 30 + 'px';
          echarts.style.height = itemComponent.height - 30 + 'px';
          let dom = { 'demo1': self.echartsInstance1, 'demo2': self.echartsInstance2 };
          dom[item.id].resize();
        }
      },
      itemResizeCallback: function (item, itemComponent) {
        let echarts = document.getElementById(`${item.id}`);

        if (echarts) {
          echarts.style.width = itemComponent.width - 30 + 'px';
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
    this.echartsOption1 = {
      title: {
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis'
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        },
        right: '10%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    this.echartsOption2 = {
      title: {
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis'
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        },
        right: '10%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
      ]
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
