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
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const W = 600;
    const H = 350;
    const margin = { left: 30, right: 15, bottom: 25, top: 50 };
    const newW = W - margin.left - margin.right;
    const newH = H - margin.top - margin.bottom;
    // 获取元素
    let svgDom = d3.select('.chart-page-body')
      .append('svg').attr('width', W).attr('height', H)
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
    //创建y轴
    let AxisY = d3.axisLeft().scale(_Y);
    svgDom.append('g').call(AxisY).attr('transform', 'translate(' + margin.left + ',' + 0 + ')')
  }
}
