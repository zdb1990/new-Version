import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'uxsino-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit, AfterViewInit {
  navList: any;
  flag: boolean = false;
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    // this.itemOpen();
  }
  // itemOpen() {
  //   this.navList = $('.nav-item');
  //   for (let i = 0; i < this.navList.length; i++) {
  //     this.navList[i].clickindex = i;
  //     this.navList.eq(i).click(function () {
  //       console.log($(this));
  //       // // 然后找到你当前点击的节点把他显示,重复点击同一个元素隐藏
  //       if (!this.flag) {
  //         $(this).find('.nav-item-children').slideUp();
  //       } else {
  //         $(this).siblings().find('.nav-item-children').slideUp();
  //         $(this).find('.nav-item-children').slideDown();
  //       }
  //     });
  //   }
  //   console.log(this.navList)
  // }
}
