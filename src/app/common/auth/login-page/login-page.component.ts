import { Component, OnInit } from '@angular/core';
import { AutoService } from './../auto.service';
@Component({
  selector: 'uxsino-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  seachObj: any;
  constructor(private autoservice: AutoService) { }

  ngOnInit() {
    this.seachObj = {
      name: 3,
      value: 5
    };
    this.autoservice.getLogin(this.seachObj).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
