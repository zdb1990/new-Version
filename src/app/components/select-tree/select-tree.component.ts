import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
@Component({
  selector: 'uxsino-select-tree',
  templateUrl: './select-tree.component.html',
  styleUrls: ['./select-tree.component.scss']
})
export class SelectTreeComponent implements OnInit {
  isOpen: Boolean = false;
  value: string;
  treeList: any;
  data: any = [
    {
      title: 'root1',
      id: '1001',
      children: [
        {
          title: 'child1',
          id: '10001',
          children: [
            {
              title: 'child1.1',
              id: '100011',
              children: []
            },
            {
              title: 'child1.2',
              id: '100012',
              children: [
                {
                  title: 'grandchild1.2.1',
                  id: '1000121',
                },
                {
                  title: 'grandchild1.2.2',
                  id: '1000122',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'root2',
      id: '1002',
      children: [
        {
          title: 'child2.1',
          id: '10021',
          children: [],
        },
        {
          title: 'child2.2',
          id: '10022',
          children: [
            {
              title: 'grandchild2.2.1',
              id: '100221'
            }
          ]
        }
      ]
    }
  ];
  nodes: any;
  constructor() { }

  ngOnInit() {
    // this.treeNode(this.data);
    let treeNode = this.treeNode(this.data);
    // tslint:disable-next-line:forin
    this.treeList = [];
    // tslint:disable-next-line:forin
    for (const i in treeNode) {
      this.treeList.push(new NzTreeNode(treeNode[i]));
    }
    this.nodes = this.treeList;
  }
  treeNode(arr) {
    // console.log(arr);
    // tslint:disable-next-line:forin
    for (const i in arr) {
      arr[i]['key'] = arr[i].id;
      if (arr[i].children && arr[i].children.length > 0) {
        this.treeNode(arr[i].children);
      }
    }
    return arr;
  }
  onChange(value) {
    console.log(value);
  }
}
