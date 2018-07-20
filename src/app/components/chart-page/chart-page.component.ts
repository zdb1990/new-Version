import { Component, OnInit, AfterContentInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GetEchartsService } from '../../service/getEcharts.service';

@Component({
  selector: 'uxsino-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit, AfterContentInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  public echartsInstance0: any;
  public echartsInstance1: any;
  public echartsInstance2: any;
  echarts0: any;
  echarts1: any;
  echarts2: any;
  dataBJ: any = [
    [55, 9, 56, 0.46, 18, 6, 1],
    [25, 11, 21, 0.65, 34, 9, 2],
    [56, 7, 63, 0.3, 14, 5, 3],
    [33, 7, 29, 0.33, 16, 6, 4],
    [42, 24, 44, 0.76, 40, 16, 5]
  ];
  dataGz: any = [
    [26, 37, 27, 1.163, 27, 13, 1],
    [85, 62, 71, 1.195, 60, 8, 2],
    [78, 38, 74, 1.363, 37, 7, 3],
    [21, 21, 36, 0.634, 40, 9, 4],
    [41, 42, 46, 0.915, 81, 13, 5]
  ];
  dataSH: any = [
    [91, 45, 125, 0.82, 34, 23, 1],
    [65, 27, 78, 0.86, 45, 29, 2],
    [83, 60, 84, 1.09, 73, 27, 3],
    [109, 81, 121, 1.28, 68, 51, 4],
    [106, 77, 114, 1.07, 55, 51, 5],
    [109, 81, 121, 1.28, 68, 51, 6]
  ];
  barData: any = [
    { 'name': 'center1', 'value': 50 },
    { 'name': 'center2', 'value': 150 },
    { 'name': 'center3', 'value': 5 },
    { 'name': 'center4', 'value': 250 },
    { 'name': 'center5', 'value': 53 },
    { 'name': 'center6', 'value': 15 },
  ];
  barDatas: any = [
    { 'name': 'center1', 'value': 50 },
    { 'name': 'center2', 'value': 150 },
  ];
  dragData: any = [
    { name: 'Radar Title' },
    { name: 'Pie Title' },
    { name: 'Panel Title' },
  ];
  selectedValue: String = '';
  eventValue: any;
  constructor(private getechartsservice: GetEchartsService) { }

  ngOnInit() {
    let self = this;
    this.options = {
      gridType: 'fit',
      compactType: 'none',
      // // 当元素改变时
      itemChangeCallback: function (item, itemComponent) {
        let echarts = document.getElementById(`${item.id}`);

        if (echarts) {
          echarts.style.width = itemComponent.width - 50 + 'px';
          echarts.style.height = itemComponent.height - 50 + 'px';
          let dom = { 'demo1': self.echartsInstance0, 'demo2': self.echartsInstance1, 'demo3': self.echartsInstance2 };
          dom[item.id].resize();
        }
      },
      itemResizeCallback: function (item, itemComponent) {
        let echarts = document.getElementById(`${item.id}`);
        if (echarts) {
          echarts.style.width = itemComponent.width - 50 + 'px';
          echarts.style.height = itemComponent.height - 50 + 'px';
          let dom = { 'demo1': self.echartsInstance0, 'demo2': self.echartsInstance1, 'demo3': self.echartsInstance2 };
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
      { cols: 3, rows: 2, y: 0, x: 0, id: 'demo1', lable: 'Radar Title' },
      { cols: 2, rows: 1, y: 0, x: 3, id: 'demo2', lable: 'Pie Title' },
      { cols: 2, rows: 1, y: 1, x: 3, id: 'demo3', lable: 'Dashboard Title' }
    ];
  }
  ngAfterContentInit() {
    this.echarts0 = {
      id: 'demo1',
      backgroundColor: '#161627',
      title: {
        text: '雷达图',
        left: 'center',
        textStyle: {
          color: '#eee'
        }
      },
      // 提示区域的属性
      legend: {
        bottom: 5,
        data: ['center', 'server', 'pool'],
        itemGap: 20,
        textStyle: {
          color: '#fff',
          fontSize: 14
        },
        selecteMode: 'single'
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross'
        }
      },
      // 工具栏
      toolbox: {
        show: true,
        feature: {
          // mark: { show: true },

          // dataView: { show: true, readOnly: false },
          // restore: { show: true },
          // saveAsImage: { show: true }
        }
      },
      radar: {
        // 定义雷达图的维度
        indicator: [
          { name: 'center1', max: 300 },
          { name: 'center2', max: 250 },
          { name: 'center3', max: 200 },
          { name: 'center4', max: 150 },
          { name: 'center5', max: 400 }, // max指示器的最大值
          { name: 'center6', max: 350 },
        ],
        shape: 'circle', // 设定形状
        splitNumber: 5,
        name: {
          texrStyle: {
            color: 'rgb(238, 197, 102)'
          }
        },
        // 雷达中心线的颜色
        splitLine: {
          lineStyle: {
            color: [
              'rgba(238,197,102,0.1)',
              'rgba(238,197,102,0.2)',
              'rgba(238,197,102,0.4)',
              'rgba(238,197,102,0.6)',
              'rgba(238,197,102,0.8)',
              'rgba(238,197,102,1)'
            ].reverse()
          }
        },
        splitArea: {
          // 阴影部分是否显示
          show: false
        },
        // 每条轴的颜色
        axisLine: {
          lineStyle: {
            color: 'rgba(238,197,102,0.5)'
          }
        }
      },
      series: [
        {

          // 详情的名称 相对应  legend data的数据
          name: 'center',
          type: 'radar',
          lineStyle: {
            normal: {
              width: 1,
              opacity: 0.5
            }
          },
          data: this.dataBJ,
          symbol: 'none', // 数据连点是否显示
          itemStyle: {  // 串联线的颜色
            normal: {
              color: '#f9713C'
            }
          },
          areaStyle: {
            normal: {
              opacity: 0.1 // 区域颜色的透明度
            }
          }
        },
        {
          name: 'server',
          type: 'radar',
          lineStyle: {
            normal: {
              width: 1,
              opacity: 0.5
            }
          },
          data: this.dataGz,
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#B3E4A1'
            }
          },
          areaStyle: {
            normal: {
              opacity: 0.1
            }
          }
        },
        {
          name: 'pool',
          type: 'radar',
          lineStyle: {
            normal: {
              width: 1,
              opacity: 0.5
            }
          },
          data: this.dataSH,
          symbol: 'none',
          itemStyle: {
            normal: {
              color: 'rgb(238, 197, 102)'
            }
          },
          areaStyle: {
            normal: {
              opacity: 0.1
            }
          }
        }
      ]
    };
    this.echarts1 = {
      backgroundColor: '#161627',
      title: {
        text: '数据中心统计',
        subtext: '详细信息',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross'
        }
      },
      // toolbox: {
      //   show: true,
      //   feature: {
      //     mark: {
      //       show: true
      //     },
      //     dataView: {
      //       show: true,
      //       readOnly: false
      //     },
      //     // dataZoom: {
      //     //   show: true
      //     // },
      //     magicType: {
      //       show: true,
      //       // type: ['line', 'bar'],
      //     },
      //     restore: { show: true },
      //     saveAsImage: { show: true }
      //   }
      // },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: this.barData
      },
      series: [
        {
          name: '具体数据',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: this.barData,
          itemStyle: {
            emphasis: {
              shadowBlur: 20,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      color: ['rgb(254,67,101)', 'rgb(252,157,154)', 'rgb(249,205,173)', 'rgb(200,200,169)', 'rgb(131,175,155)']

    };
    this.echarts2 = {
      backgroundColor: '#161627',
      tooltip: {
        formatter: '{a} <br/>{b}:{c}%'
      },
      series: [
        {
          name: '详细数据',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              color: [[0.2, '#000000'], [0.8, '#63869e'], [1, '#91c7ae']]
            }
          },
          data: [{ value: 50, name: '完成率' }]
        }

      ]
    };
    // setInterval(() => {
    //   this.newMethod();
    // }, 1000);
  }
  // private newMethod() {
  //   console.log(this.echartsInstance3);
  //   if (this.echartsInstance3) {
  //     this.echartsthree.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
  //     this.echartsInstance3.setOption(this.echartsthree, true);
  //   }



  // }

  onChartInit(e: any, i: number) {
    // this.eventValue = e;
    if (i === 0) {
      this.echartsInstance0 = e;
    } else if (i === 1) {
      this.echartsInstance1 = e;
    } else if (i === 2) {
      this.echartsInstance2 = e;
    }
    // console.log(this.eventValue);
  }
  // 删除
  removeItem(item, i) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  addOptions(item, i, Pool) {
    console.log(item);
    if (item.id === 'demo1' && Pool === 'Pool') {
      this.echarts0.series = [{

        // 详情的名称 相对应  legend data的数据
        name: 'pool',
        type: 'radar',
        lineStyle: {
          normal: {
            width: 1,
            opacity: 0.5
          }
        },
        data: this.dataBJ,
        symbol: 'none', // 数据连点是否显示
        itemStyle: {  // 串联线的颜色
          normal: {
            color: '#f9713C'
          }
        },
        areaStyle: {
          normal: {
            opacity: 0.1 // 区域颜色的透明度
          }
        }
      }];
      this.echartsInstance0.setOption(this.echarts0, true);
    } else if (item.id === 'demo2') {
      this.echarts1.series[0].data = this.barDatas;
      this.echartsInstance1.setOption(this.echarts1, true);
    } else if (item.id === 'demo3') {
      console.log(3);
    }
  }
}
