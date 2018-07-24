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
  XxesValue: any;
  YxesValue: any;
  TypeValue: any;
  FormatValue: any;
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
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: this.type
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
  // 保存
  EditSubmit() {
    // console.log(this.XxesValue);

    // if (this.XxesValue) {
    this.XxesValue = this.XxesValue.split(',');
    this.myOptions.xAxis.data = this.XxesValue;
    this.YxesValue = this.YxesValue.split(',');
    this.myOptions.yAxis.type = 'category';
    this.myOptions.yAxis.data = this.YxesValue;
    this.myOptions.series[0].type = this.TypeValue;
    this.echartsInit.setOption(this.myOptions, true);
    this.showEdit = false;
    this.XxesValue = '';
    this.YxesValue = '';


    // // let Yvalue = this.YxesValue.trim();
    // this.YxesValue = this.YxesValue.split(',');
    // // console.log(this.YxesValue);
    // this.myOptions.yAxis.data = this.YxesValue;
    // this.echartsInit.setOption(this.myOptions, true);


  }
}
