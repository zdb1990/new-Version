import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth/auto.service';
import { CookieService } from 'ngx-cookie-service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
@Component({
  selector: 'uxsino-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  public echartsInstance1: any;
  public echartsInstance2: any;
  echartsOption1: any;
  echartsOption2: any;
  constructor() { }

  ngOnInit() {
  }
}
