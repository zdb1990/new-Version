import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../../service/webScoket.service';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
@Component({
  selector: 'uxsino-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  value: string;
  nodes = [];
  constructor(private webscoket: WebSocketService) { }

  ngOnInit() {
    this.nodes = [
      new NzTreeNode(
        {
          title: 'root1',
          key: '1001',
          children: [{
            title: 'child1',
            key: '10001',
            children: [{
              title: 'child1.1',
              key: '100011',
              children: []
            },
            {
              title: 'child1.2',
              key: '100012',
              children: [{
                title: 'grandchild1.2.1',
                key: '1000121',
                isLeaf: true,
                disabled: true
              },
              {
                title: 'grandchild1.2.2',
                key: '1000122',
                isLeaf: true
              }
              ]
            }
            ]
          }
        )
    ]
  }
  dbclick() {
    this.webscoket.createObservableSocket('ws://localhost:5100').subscribe(res => {
      if (res === '这个消息是服务器主动推送的') {
        this.webscoket.sendMessage('wswswsws');
      }
    });
  }
  onChange(event) {
    console.log(event);
  }
}
