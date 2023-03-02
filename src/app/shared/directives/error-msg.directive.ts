import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;

  constructor(
    private element: ElementRef<HTMLElement>,
  ) {
    this.htmlElement = element;

  }

  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = 'red';
  }

}
