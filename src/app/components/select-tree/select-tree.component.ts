import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'uxsino-select-tree',
  templateUrl: './select-tree.component.html',
  styleUrls: ['./select-tree.component.scss']
})
export class SelectTreeComponent implements OnInit {
  showTitle: Boolean = false;
  showMenu: Boolean = false;
  activeIndex: Number = 0;
  @Output() private changedispach = new EventEmitter();
  listData: any = [
    { name: '查看', icon: 'eye-o' },
    { name: '编辑', icon: 'edit' },
    { name: '分享', icon: 'windows-o' },
    {
      name: '更多', icon: 'appstore', children: [
        { title: '重复' },
        { title: '复制' },
        { title: 'json' },
        { title: '导出CSV' },
        { title: '切换' },
      ]
    },
    { name: '删除', icon: 'delete' },
    { name: '返回', icon: 'retweet' }
  ];


  constructor() { }

  ngOnInit() {
  }
  showMenubox() {
    this.showMenu = !this.showMenu;
  }
  showtitle(index) {
    this.activeIndex = index;
    this.showTitle = true;
  }
  operation(value) {
    console.log(value);
    if (value === '查看') {
      this.changedispach.emit([{ cols: 6, rows: 2, y: 0, x: 0, id: 'demo1', lable: 'Radar Title' }]);
    } else if (value === '返回') {

    }
  }
}
