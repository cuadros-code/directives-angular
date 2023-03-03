import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() alertMessage = 'required';

  constructor(
    private element: ElementRef<HTMLElement>,
  ) {
    this.htmlElement = element;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.alertMessage;
  }

}
