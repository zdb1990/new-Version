import { AuthService } from './common/auth/auto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: []
})
export class AppComponent {
  constructor(private authService: AuthService) {

  }
  OnInit() {
    console.log(this.authService);

  }
}
