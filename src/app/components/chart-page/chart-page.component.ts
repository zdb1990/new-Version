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
    let svgDom = d3.select('.chart-page-bodys')
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
    // console.log(d3.scaleOrdinal(d3.schemeCategory10));


    const margin = { top: 100, right: 100, bottom: 100, left: 100 };
    const W = Math.min(700, window.innerWidth - 10) - margin.left - margin.right;
    const H = Math.min(W, window.innerHeight - margin.top - margin.bottom - 20);
    // let randarDom = d3.select('.chart-page-body');
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
    };
    let cfg = {
      w: 600,
      h: 600,
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
      levels: 3,
      maxVlaue: 0,
      labelFactor: 1.25,
      wrapWidth: 60,
      opactiyArea: 0.35,
      dotRadius: 4,
      opacityCircles: 0.1,
      strokeWidth: 2,
      roundStroke: false,
      color: d3.scaleOrdinal(d3.schemeCategory10)
    };
    let arraxis = [];
    // 判断radarChartOptions每个属性是否为空
    if ('undefined' !== typeof radarChartOptions) {
      // console.log(1)
      // tslint:disable-next-line:forin
      for (let i in radarChartOptions) {
        console.log(i);
        if ('undefined' !== typeof radarChartOptions[i]) {
          // 把radarChartOptions赋值给cfg[i]
          cfg[i] = radarChartOptions[i];
        }
      }
    }
    // console.log(cfg);
    // 取出数据中的最大值
    let maxValue = Math.max(cfg.maxVlaue, d3.max(this.randardata, (i) => {
      return d3.max(i.map((o) => {
        // console.log(o);
        return o.value;
      }));
    }));
    // console.log(maxValue)
    // 把第一组数据添加到一个数组里
    let allAxis = (this.randardata[0].map(function (i, j) {
      return i.axis;
    }));
    let total = allAxis.length;
    //算出圆角度数
    let radius = Math.min(cfg.w / 2, cfg.h / 2);
    let Format = d3.format('%');
    // 圆周率*2/数据长度
    let angleSlice = Math.PI * 2 / total;
    console.log(Math.PI);
    console.log(radius);
    // 定义比例0-圆角
    let rScale = d3.scaleLinear().range([0, radius]).domain([0, maxValue]);
    d3.select('.chart-page-body').select('svg').remove();
    let randarsvg = d3.select('.chart-page-body').append('svg')
      .attr('class', 'randar-box')
      .attr('width', cfg.w + cfg.margin.left + cfg.margin.right)
      .attr('height', cfg.h + cfg.margin.top + cfg.margin.bottom);
    let gDom = randarsvg.append('g')
      .attr('transform', 'translate(' + (cfg.w / 2 + cfg.margin.left) + ',' + (cfg.h / 2 + cfg.margin.top) + ')');
    // console.log(cfg.h, radarChartOptions.h, window.innerWidth)
    // SVG 允许我们定义以后需要重复使用的图形元素。 建议把所有需要再次使用的引用元素定义在defs元素里面。
    // 这样做可以增加SVG内容的易读性和可访问性。 在defs元素中定义的图形元素不会直接呈现。
    // 你可以在你的视口的任意地方利用 <use>元素呈现这些元素。
    // filter元素作用是作为原子滤镜操作的容器。它不能直接呈现。可以利用目标SVG元素上的filter属性引用一个滤镜。
    let filter = gDom.append('defs').append('filter').attr('id', 'glow');
    // feGaussianBlur该滤镜对输入图像进行高斯模糊，属性 stdDeviation 中指定的数量定义了钟形,result定义了滤镜的分配名
    let feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur');
    // feMerge滤镜允许同时应用滤镜效果而不是按顺序应用滤镜效果。
    // 利用result存储别的滤镜的输出可以实现这一点，然后在一个 <feMergeNode>子元素中访问它。
    let feMerge = filter.append('feMerge');
    let feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    let feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');
    let axisGrid = gDom.append('g').attr('class', 'axisWrapper');
    axisGrid.selectAll('.levels').data(d3.range(1, (cfg.levels + 1)).reverse()).enter()
      .append('circle')
      .attr('class', 'gridCircle')
      .attr('r', (d, i) => {
        console.log(cfg.levels, radius);
        return radius / cfg.levels * d;
      }).style('fill', '#CDCDCD')
      .style('stroke', '#CDCDCD')
      .style('fill-opacity', cfg.opacityCircles)
      .style('filter', 'url(#glow)');
    axisGrid.selectAll('.axisLable').data(d3.range(1, (cfg.levels + 1)).reverse())
      .enter().append('text')
      .attr('class', 'axisLabel')
      .attr('x', 4)
      .attr('y', (d) => {
        return -d * radius / cfg.levels;
      })
      .attr('dy', '0.4em')
      .style('font-size', '10px')
      .attr('fill', '#737373')
      .text((d, i) => {
        return Format(maxValue * d / cfg.levels);
      });

    let axis = axisGrid.selectAll('.axis')
      .data(allAxis)
      .enter()
      .append('g')
      .attr('class', 'axis');
    axis.append('line').attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', (d, i) => {
        // console.log(rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2))
        return rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2);
      })
      .attr('y2', (d, i) => {
        // console.log(rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2))
        return rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2);
      }).attr('class', 'line')
      .style('stroke', 'white')
      .style('stroke-width', '2px')
    // console.log(rScale(1.3))
  }



}
