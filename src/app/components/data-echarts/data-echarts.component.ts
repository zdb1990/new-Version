import { Component, OnInit } from '@angular/core';

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
  showCard() {
    this.cardTable = true;
  }
  deleteTab() {
    this.cardTable = false;
  }
}
