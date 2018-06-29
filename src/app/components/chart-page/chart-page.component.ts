import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'uxsino-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit, AfterViewInit {
  data = [
    {
      'key': 1.5,
      'value': 3.5
    },
    {
      'key': 2.5,
      'value': 4.5
    },
    {
      'key': 3.24,
      'value': 5.3
    },
    {
      'key': 4.3,
      'value': 6.1
    },
    {
      'key': 5.4,
      'value': 7.5
    },
    {
      'key': 6.32,
      'value': 7.3
    },
    {
      'key': 7.4,
      'value': 8.3
    },
    {
      'key': 8.4,
      'value': 9.3
    },
    {
      'key': 9.4,
      'value': 10.3
    },
    {
      'key': 10.4,
      'value': 11.3
    }
  ];
  randardata = [
    [// iPhone
      { axis: 'Battery Life', value: 0.22 },
      { axis: 'Brand', value: 0.28 },
      { axis: 'Contract Cost', value: 0.29 },
      { axis: 'Design And Quality', value: 0.17 },
      { axis: 'Have Internet Connectivity', value: 0.22 },
      { axis: 'Large Screen', value: 0.02 },
      { axis: 'Price Of Device', value: 0.21 },
      { axis: 'To Be A Smartphone', value: 0.50 }
    ], [// Samsung
      { axis: 'Battery Life', value: 0.27 },
      { axis: 'Brand', value: 0.16 },
      { axis: 'Contract Cost', value: 0.35 },
      { axis: 'Design And Quality', value: 0.13 },
      { axis: 'Have Internet Connectivity', value: 0.20 },
      { axis: 'Large Screen', value: 0.13 },
      { axis: 'Price Of Device', value: 0.35 },
      { axis: 'To Be A Smartphone', value: 0.38 }
    ], [// Nokia Smartphone
      { axis: 'Battery Life', value: 0.26 },
      { axis: 'Brand', value: 0.10 },
      { axis: 'Contract Cost', value: 0.30 },
      { axis: 'Design And Quality', value: 0.14 },
      { axis: 'Have Internet Connectivity', value: 0.22 },
      { axis: 'Large Screen', value: 0.04 },
      { axis: 'Price Of Device', value: 0.41 },
      { axis: 'To Be A Smartphone', value: 0.30 }
    ]
  ];
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // 创建线性图表
    this.createLineChart();
    // 创建雷达图标
    this.createrandarChart();
  }

  createLineChart() {
    const W = 600;
    const H = 350;
    const margin = { left: 30, right: 15, bottom: 25, top: 50 };
    const newW = W - margin.left - margin.right;
    const newH = H - margin.top - margin.bottom;
    // 获取元素
    let svgDom = d3.select('.chart-page-body')
      .append('svg').attr('class', 'line-svg').attr('width', W).attr('height', H)
      .attr('transform', () => {
        return 'translate(' + margin.left + ',' + margin.top + ')';
      });
    // 创建容器偏移添加线
    let gDom = svgDom.append('g').attr('class', 'line-box').attr('transfrom', () => {
      return 'translate(' + margin.left + ',0)';
    });
    // 创建一条线 line() 创建一个阴影area()
    let lineDom = d3.area()
      // 创建曲线的线性的比例
      // console.log(_X());
      .x((d) => {
        console.log(d);
        return _X(d.key);
      }).y0(newH).y1((d) => {
        return _Y(d.value);
        // curve(d3.curveCardinal)生成曲线
      }).curve(d3.curveMonotoneX);

    // 创建线的x轴的比例
    let _X = d3.scaleLinear().domain([0, d3.max(this.data, (d) => {
      return d.key;
    })]).range([0, newW]);
    // 创建线的y轴的比例
    let _Y = d3.scaleLinear().domain([0, d3.max(this.data, (d) => {
      return d.value;
    })]).range([newH, 0]);
    // 往容器里添加path设置d属性找到线的坐标
    let pathDom = gDom.append('path').attr('class', 'line-box').attr('d', lineDom(this.data));
    // 添加x轴
    let AxisX = d3.axisBottom().scale(_X);
    // console.log(AxisX)
    svgDom.append('g').call(AxisX).attr('transform', 'translate(' + margin.left + ',' + newH + ')');
    // 创建y轴
    let AxisY = d3.axisLeft().scale(_Y);
    svgDom.append('g').call(AxisY).attr('transform', 'translate(' + margin.left + ',' + 0 + ')');
    // 放大函数 d3.zoom;
  }
  createrandarChart() {
    const W = 700;
    const H = 500;
    const margin = { top: 100, right: 100, bottom: 100, left: 100 }
    let randarDom = d3.select('.chart-page-body');
    // 设定颜色比例
    let color = d3.scaleOrdinal().range(['#EDC951', '#CC333F', '#00A0B0']);
    // 设定雷达图的选项
    let radarChartOptions = {
      w: W,
      h: H,
      margin: margin,
      maxValue: 0.5,
      levels: 5,
      roundStrokes: true,
      color: color
    }
    // this.RadarChart(".chart-page-body", this.randardata, radarChartOptions);
  }
  //   RadarChart(class, data, options) {

  // }
}
