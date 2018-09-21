import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[openitem]'
})
export class OpenItemDirective {
  navitem: any = [];
  index: Number;
  constructor(private el: ElementRef) {
    el.nativeElement['flag'] = false;
    el.nativeElement['attr'] = 'directive';
    el.nativeElement['indexed'] = '';
  }
  @HostListener('click') onClick() {
    for (let i = 0; i < $('.nav-item').length; i++) {
      $('.nav-item').eq(i).find('.nav-item-children').css('display', 'none');
      if ($('.nav-item')[i].attr === 'directive') {
        $('.nav-item')[i]['indexed'] = i;
        if (this.el.nativeElement['indexed'] !== $('.nav-item')[i]['indexed']) {
          $('.nav-item').eq(i).find('.nav-item-children').css('display', 'none');
          $('.nav-item')[i]['flag'] = false;
        } else {
          console.log(1);
          this.el.nativeElement['flag'] = !this.el.nativeElement['flag'];
          if (this.el.nativeElement['flag']) {
            $('.nav-item').eq(i).find('.nav-item-children').css('display', 'block');
          } else {
            $('.nav-item').eq(i).find('.nav-item-children').css('display', 'none');
          }
        }
      }
    }
  }
}
