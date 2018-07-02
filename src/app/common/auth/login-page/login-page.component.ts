import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auto.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'uxsino-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  seachObj: any;
  constructor(private authservice: AuthService, private route: Router, private cookieservice: CookieService) { }

  ngOnInit() {
    this.seachObj = {
      'username': 'admin',
      'password': '123456'
    };

  }
  // 用户登录
  login() {
    this.authservice.Login(this.seachObj).subscribe((obj) => {
      console.log(obj);
      console.log(obj.success);

      if (obj.success) {
        this.cookieservice.set('usercookie', obj.data.token.access_token);
        this.route.navigateByUrl('home-page');
      }
    }, error => {
      console.log(error);
      this.route.navigateByUrl('/home-page');
    });
  }


  goHomePage() {
    this.route.navigateByUrl('/home-page');
  }
}
