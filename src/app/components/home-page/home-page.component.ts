import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth/auto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'uxsino-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getUseList().subscribe(obj => {
      console.log(obj);
    }, error => {
      console.log(error);
    });
  }

}
