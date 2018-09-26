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
      // $('.nav-item').eq(i).find('.nav-item-children').css('display', 'none');
      if ($('.nav-item')[i].attr === 'directive') {
        $('.nav-item')[i]['indexed'] = i;
        if (this.el.nativeElement['indexed'] !== $('.nav-item')[i]['indexed']) {
          $('.nav-item').eq(i).find('.nav-item-children').slideUp();
          $('.nav-item')[i]['flag'] = false;
        } else {
          console.log(1);
          this.el.nativeElement['flag'] = !this.el.nativeElement['flag'];
          if (this.el.nativeElement['flag']) {
            $('.nav-item').eq(i).find('.nav-item-children').slideDown();
          } else {
            $('.nav-item').eq(i).find('.nav-item-children').slideUp();
          }
        }
      }
    }
  }
}

@Directive({
  selector: '[openchild]'
})
export class OpenChildDirective {
  constructor(private el: ElementRef, private open: OpenItemDirective) {
    el.nativeElement['flag'] = false;
    el.nativeElement['attr'] = 'directive';
    el.nativeElement['indexed'] = '';
  }
  @HostListener('click', ['$event']) onclick(event: any) {

    console.log(event);
    event.stopPropagation();
    let elment = this.open['el'].nativeElement['indexed'];
    console.log(elment);
    for (let i = 0; i < $('.nav-item').eq(elment).find('.children-item').length; i++) {
      console.log($('.nav-item').eq(elment).find('.children-item')[i].attr);
      if ($('.nav-item').eq(elment).find('.children-item')[i].attr === 'directive') {
        $('.nav-item').eq(elment).find('.children-item')[i]['indexed'] = i;
        console.log($('.nav-item').eq(elment).find('.children-item'));
        console.log(this.el.nativeElement['indexed']);
        if (this.el.nativeElement['indexed'] !== $('.nav-item').eq(elment).find('.children-item')[i]['indexed']) {
          $('.nav-item').eq(elment).find('.children-item').eq(i).find('.nav-item-last').slideUp();
          $('.nav-item').eq(elment).find('.children-item')[i]['flag'] = false;
        } else {
          console.log(1);
          this.el.nativeElement['flag'] = !this.el.nativeElement['flag'];
          if (this.el.nativeElement['flag']) {
            $('.nav-item').eq(elment).find('.children-item').eq(i).find('.nav-item-last').slideDown();
            // $('.nav-item').eq(i).find('.nav-item-children').slideDown();
          } else {
            $('.nav-item').eq(elment).find('.children-item').eq(i).find('.nav-item-last').slideUp();
          }
        }
      }
    }
    console.log(this.el);
  }
}
