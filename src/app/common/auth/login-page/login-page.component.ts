import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auto.service';

@Component({
  selector: 'uxsino-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  seachObj: any;
  tokenOut: any;
  constructor(private authservice: AuthService, private route: Router) { }

  ngOnInit() {
    this.seachObj = {
      'username': 'admin',
      'password': '123456'
    };
    this.tokenOut = {
      token: ''
    };
  }
  // 用户登录
  login() {
    this.authservice.Login(this.seachObj).subscribe((obj) => {
      console.log(obj);
      this.tokenOut['token'] = obj.data.token.access_token;
    }, error => {
      console.log(error);
    });
  }
  // 退出登录
  loginout() {
    this.authservice.Loginout(this.tokenOut).subscribe((obj) => {
      console.log(obj);
    });
  }
  getUserList() {
    this.authservice.getUseList().subscribe((obj) => {
      console.log(obj);
    });
  }
  goHomePage() {
    this.route.navigateByUrl('/home-page');
  }
}
