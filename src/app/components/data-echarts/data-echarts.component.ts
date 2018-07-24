import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'uxsino-data-echarts',
  templateUrl: './data-echarts.component.html',
  styleUrls: ['./data-echarts.component.scss']
})
export class DataEchartsComponent implements OnInit {
  cardTable: Boolean = false;

  constructor() { }

  ngOnInit() {

  }

  // 显示框
  showCard() {
    this.cardTable = !this.cardTable;
  }
  // 关闭框
  deleteTable(event) {
    this.cardTable = event;
  }
}
