import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'uxsino-new-slider',
  templateUrl: './new-slider.component.html',
  styleUrls: ['./new-slider.component.scss']
})
export class NewSliderComponent implements OnInit, AfterViewInit {
  navList = [
    { name: '总览', icon: 'bars', edit: true },
    { name: '数据中心池', icon: 'edit', edit: true },
    { name: '镜像服务', icon: 'file', edit: true },
    { name: '网络服务', icon: 'link', edit: true },
    { name: '存储', icon: 'tag', edit: true },
    { name: '控制台服务', icon: 'eye', edit: true },
    { name: '管理', icon: 'like', edit: true },
    { name: '日志', icon: 'key', edit: true },
  ];
  listItem: any;
  selectIndex: Number = 0;
  constructor(router: Router) {
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.unBind();
  }
  openItem(index) {
    // tslint:disable-next-line:forin
    this.selectIndex = 0;
    for (let i = 0; i < this.navList.length; i++) {
      if (i !== index) {
        this.navList[i].edit = true;
        $('.nav-list-children').eq(i).css({ 'display': 'none' });
      } else {
        this.navList[i].edit = !this.navList[i].edit;
        if (this.navList[i].edit) {
          $('.nav-list-children').eq(i).css({ 'display': 'none' });
        } else {
          $('.nav-list-children').eq(i).css({ 'display': 'block' });
        }
      }
    }
  }
  // 给菜单栏添加鼠标右击事件
  unBind() {
    document.oncontextmenu = function () {
      return false;
    };
  }
  tab(index, e) {
    console.log(index, e);
    if (e.which === 3) {
      this.selectIndex = index;
      console.log(this.selectIndex);
    }

  }
}
