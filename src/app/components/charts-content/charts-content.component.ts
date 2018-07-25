import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit, NgZone } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
@Component({
  selector: 'uxsino-charts-content',
  templateUrl: './charts-content.component.html',
  styleUrls: ['./charts-content.component.scss']
})
export class ChartsContentComponent implements OnInit, AfterContentInit {
  myOptions: any;
  type: String = 'line';
  // 图表类型
  charttype: String = 'default';
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  @Input() cardTable: Boolean = false;
  @Output() deleteTable = new EventEmitter();
  echartsInit: any;
  showEdit: Boolean = false;
  selectedValue: any;
  item: Number = 0;
  constructor(private zone: NgZone) { }

  ngOnInit() {
    // 拖拽初始化配置
    let self = this;
    this.options = {
      gridType: 'fixed',
      compactType: 'none',
      margin: 10,
      itemChangeCallback: function (item, itemComponent) {
        let echarts = document.getElementById(`${item.id}`);
        if (echarts) {
          echarts.style.width = itemComponent.width - 30 + 'px';
          echarts.style.height = itemComponent.height - 30 + 'px';
          self.echartsInit.resize();
        }
      },
      itemResizeCallback: function (item, itemComponent) {
        let echarts = document.getElementById(`${item.id}`);
        if (echarts) {
          echarts.style.width = itemComponent.width - 30 + 'px';
          echarts.style.height = itemComponent.height - 30 + 'px';
          self.echartsInit.resize();
        }
      },
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
      { cols: 3, rows: 2, y: 0, x: 0, id: 'demo1' },
    ];

  }
  // 创建图表类型
  ShowLine() {
    this.charttype = 'line';
  }
  ngAfterContentInit() {

    this.myOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: [10, 23, 21, 30, 40, 99, 27],
        type: 'line'
      }]
    };
  }

  // 删除表格
  deleteTab() {
    this.deleteTable.emit(false);
  }

  onChartInit(event) {
    this.echartsInit = event;
  }
  changedispach(event) {
    if (event === 'default') {
      this.charttype = event;
    } else if (event === 'edit') {
      this.showEdit = true;
    } else {
      this.dashboard = event;
    }
  }
  // 选择图形
  Modelchange(value) {
    console.log(value);
    if (value === 'Gauge') {
      this.myOptions = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: 'center中心',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 10, name: '数据' }]
          }
        ]
      };
      // setInterval(() => {
      //   this.item++;
      //   let arr = [10, 23, 21, 30, 40, 99, 27];
      //   if (this.item > arr.length - 1) {
      //     this.item = 0;
      //   }
      //   this.myOptions.series[0].data[0].value = arr[this.item];
      //   this.echartsInit.setOption(this.myOptions, true);
      // }, 1000);
    } else if (value === 'Line') {
      this.myOptions = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [10, 23, 21, 30, 40, 99, 27],
          type: this.type
        }]
      };
      this.echartsInit.setOption(this.myOptions, true);
    } else if (value === 'Bar') {
      this.myOptions = {
        title: {
          text: 'center中心',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
          {
            name: '数据来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 10, name: 'Mon' },
              { value: 23, name: 'Tue' },
              { value: 21, name: 'Wed' },
              { value: 30, name: 'Thu' },
              { value: 40, name: 'Fri' },
              { value: 99, name: 'Sat' },
              { value: 27, name: 'Sun' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      this.echartsInit.setOption(this.myOptions, true);
    } else if (value === 'Radar') {
      this.myOptions = {

      }
    }
  }

}
