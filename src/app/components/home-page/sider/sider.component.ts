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
}
