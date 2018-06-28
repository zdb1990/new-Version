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
  constructor(private authservice: AuthService, private route: Router) { }

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

    }, error => {
      console.log(error);
    });
  }


  goHomePage() {
    this.route.navigateByUrl('/home-page');
  }
}
