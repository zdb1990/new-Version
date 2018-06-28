import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth/auto.service';

@Component({
  selector: 'uxsino-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  tokenOut: any;
  constructor(private authservice: AuthService, private route: Router) { }

  ngOnInit() {
    this.tokenOut = {
      token: ''
    };
  }
  // 退出登录
  loginout() {
    console.log(this.authservice);
    this.tokenOut.token = this.authservice.token;
    this.authservice.Loginout(this.tokenOut).subscribe((obj) => {
      console.log(obj);
      if (obj.success) {
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
