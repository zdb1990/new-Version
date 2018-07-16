import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'uxsino-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {
  activenum: Number = 0;
  menuList: any = [
    { icon: 'anticon-mail', title: '主页' },
    { icon: 'anticon-appstore', title: '磁盘' },
    { icon: 'anticon-setting', title: '权限' }
  ];
  constructor() { }

  ngOnInit() {
    // this.titleCss();
    // console.log($('.tplink'));
  }
  Onclick(index) {
    console.log(index);
    this.activenum = index;
  }
  // titleCss() {
  //   $('.mene-item').hover(function () {
  //     for (let i = 0; i < $('.mene-item').length; i++) {
  //       $('.mene-item').css({ 'backgroundColor': '#04092d' });
  //       $('.mene-item').children('.line').css('display', 'none');
  //       $('.mene-item').children('.title').css('display', 'none');
  //     }
  //     $(this).children('.title').css('display', 'block');
  //     $(this).children('.line').css('display', 'block');
  //     $(this).css({ 'backgroundColor': '#162d59' });
  //   });
  //   $('.mene-item').click(function (e) {
  //     $(this).children('.title').css('display', 'block');
  //     $(this).children('.line').css('display', 'block');
  //     $(this).css({ 'backgroundColor': '#1890ff' });
  //   });


  // }
}
