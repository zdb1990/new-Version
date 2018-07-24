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
  constructor(private zone: NgZone) { }

  ngOnInit() {
    // 拖拽初始化配置
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
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: this.type
      }]
    };
    // 图表初始化显示

    // $('#demo1').removeAttr('_echarts_instance_');
  }

  // 删除表格
  deleteTab() {
    this.deleteTable.emit(false);
  }

  onChartInit(event) {
    console.log(event);
    this.echartsInit = event;
  }
  changedispach(event) {
    this.dashboard = event;

    // console.log(1);
    this.myOptions.series[0].data = [13, 67, 34, 23, 22];
    console.log(this.myOptions, this.echartsInit);
    this.echartsInit.setOption(this.myOptions, true);
  };
  // this.myOptions = Object.assign({}, this.myOptions);


  // this.echartsInit.setOption(this.myOptions, true)

}
