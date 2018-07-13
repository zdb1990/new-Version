import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth/auto.service';
import { Router } from '@angular/router';
import { WebSocketService } from '../../service/webScoket.service';



@Component({
  selector: 'uxsino-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router, private webscoket: WebSocketService) { }

  ngOnInit() {



  }

}
