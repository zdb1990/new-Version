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
    // this.nodes = [
    //   new NzTreeNode({})
    // ]
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
