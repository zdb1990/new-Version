setOptions配置项
title 标题 包含主标题和副标题
title{
    id//组件id;
    show:true//是否显示组建标题
    title//主标题文本\n换行
    link:主标题文本超链接
    targer://指定窗口打开超链接 默认blank
    textStyle:{
        color//标题颜色
        fontStyle字体风格
        fontWeight//字体粗细
        fontSize//字体大小
        align//文字水平对齐方式
        verticalAlign //垂直对齐方式
        lineHeight//行高
        width//文字块的宽度,
        height:文字块的高度
        //自定义富文本样式
        rich:{

        }
        subtext//副标题文字,
        itemGap //主标题与副标题之间的距离
        alevel:0组件所有图形的z值图形靠前还是巨后
        left//组件离容器左侧的距离
        top //grid容器离上侧的距离
        backgroundColor //标题背景色 默认透明
        borderColor 标题的边框背景颜色
        borderWidth 标题的边框线宽
        borderRadius:0
    },
  legend:{//图列组件
   type:'plain' //普通图列 //scroll可滚动翻页的图例
   orient:'horizontal' //图表列表的布局朝向 //vertical
   symbolKeepAspect //如果是图标
   formatter 用来格式化图列文本，支持字符串模板和回调函函数两种形式
   selectedMode:true //图列的选择模式，控制是否可以通过点击图列改变系列的显示状态，默认开启可以设成false关闭除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
  }, 
  gird:{
     containLabel //grid区域是否包含坐标轴的刻度标签
     false的时候grad.left等等决定由坐标轴形成的矩形的尺寸和位置
     这比较适用于多个 grid 进行对齐的场景，因为往往多个 grid 对齐的时候，是依据坐标轴来对齐的。
   }，
   xAxis：{

   }//直角坐标系grid的x轴，一般情况下单个的grid组件最多能放下两个x轴多余两个x轴需要通过配置offset属性防止多个x轴的重叠
   gridIndex //x轴所在的grid索引
   position x轴的位置可选top bottom
   offset x轴相对于默认位置的偏移在相同的position上有多个x轴时候用
   type value数值轴，适用于连续数据 category 类目轴适用离散类目数据 默认项 time时间轴适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化
   log对数轴，适用于对数数据
   name //坐标轴的名称
   nameLocation 坐标轴名称显示位置
   nameTextStyle坐标轴的文字样式
   nameGap 坐标轴名称与轴线之间的距离
   nameRotate 坐标轴名字的旋转角度值
   inverse是否反向坐标
   boundaryGap坐标轴两边留白策略 类目数组中可配置true和false默认true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
   非类目轴包括时间数值对数周boundaryGap是两个值的数组,分别表示最小值和最大值的延申范围在设置minmax后无效
   min坐标轴刻度最小值可以设置成特殊的dataMin不设置会自动计算最小值保证坐标轴刻度均匀分配
   在类目数组中
   scale 只在数值轴中type:'value'有用默认false是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。
   minInterval //自动计算坐标轴最小间隔大小
   maxInterval自动计算的坐标轴最大间隔大小
   interval强制坐标轴分隔间隔
   silent默认false坐标轴是否静态无法交互
   triggerEvent
   axisLine坐标轴轴线相关的设置
   aAxis.axisLine.show是否显示坐标轴轴线
   aAxis.axisLine.onZeroAxisIndex 当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上。
   xAxis.axisLine.lineStyle.color 坐标轴轴线的颜色
   xAxis.axisLine.lineStyle.type solid dashed dooted
   xAxis.axisTick刻度
   xAxis.axisTick.alignWithLabel为true的时候 可以保证刻度和标签对其
   xAxis.axisTick.inside坐标轴的刻度是否朝内 默认朝外
   xAxis.axisTick.length坐标轴刻度的长度
   xAxis.axisTick.lineStyle.color刻度的颜色
   xAxis.axisTick.lineStyle.type刻度的类型 solid dashed dooted
   xAxis.data[]类目的数据在类目轴type:'category'生效
   polar极坐标系极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。
   polar.center极度坐标中心 圆心的位置 数组第一个是横坐标 第二是纵坐标
   angleAxis极度坐标的角度轴
   angleAxis.startAngle 起始角度默认90度起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方
   angleAxis.clockwise刻度增长是否顺时针 莫仍逆时针
   dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
}
