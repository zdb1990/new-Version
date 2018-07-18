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

}
