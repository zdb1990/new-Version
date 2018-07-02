import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth/auto.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'uxsino-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  tokenOut: any;
  constructor(private authservice: AuthService, private route: Router, private cookie: CookieService) { }

  ngOnInit() {

  }
  // 退出登录
  loginout() {

    this.authservice.Loginout().subscribe((obj) => {
      console.log(obj);
      if (obj.success) {
        this.cookie.delete('usercookie');
        this.route.navigateByUrl('/login-page');
        this.authservice.isLoggedIn = false;
      }
    });
  }
  // 获取用户信息
  getUserList() {
    this.authservice.getUseList().subscribe((obj) => {
      console.log(obj);
    });
  }
}
