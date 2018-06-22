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
  tokenInfo: any;
  constructor(private authservice: AuthService, private route: Router) { }

  ngOnInit() {
    this.seachObj = {
      'username': 'admin',
      'password': '123456'
    };

  }
  login() {
    this.authservice.getLogin(this.seachObj).subscribe((obj) => {
      console.log(obj);
      // this.tokenInfo = obj.data.token.access_token;
      // console.log(this.tokenInfo);
      // window.sessionStorage.setItem('usertoken', this.tokenInfo);
    }, error => {
      console.log(error);
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
