import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uxsino-new-slider',
  templateUrl: './new-slider.component.html',
  styleUrls: ['./new-slider.component.scss']
})
export class NewSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.navList();
  }
  navList() {
    $('.mene-item').click(function () {
      $(this).addClass('active');
      $(this).find('.line').addClass('line-active');
      $(this).siblings().removeClass('active');
      $(this).siblings().find('.line').removeClass('line-active');
    });
  }
}
