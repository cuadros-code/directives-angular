import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _message: string = 'default text';

  /**
   * SE AGREGA UN SET EN EL INPUT PARA QUE LA PROPIEDAD
   * PUEDA SER REACTIVA A LOS CAMBIOS DESDE EL HOST
   */
  
  // @Input() color: string = 'red';
  @Input() set color( value: string ){
    this.htmlElement.nativeElement.style.color = value;
    this._color = value;
  }

  // @Input() alertMessage = 'required';
  @Input() set alertMessage( message: string ) {
    this.htmlElement.nativeElement.innerText = message;
    this._message = message;
  }

  @Input() set invalid( value: boolean ){
    value
    ? this.htmlElement.nativeElement.classList.remove('hidden')
    : this.htmlElement.nativeElement.classList.add('hidden')
  }

  constructor(
    private element: ElementRef<HTMLElement>,
  ) {
    this.htmlElement = element;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.setColor();
    // this.setMessage();
  }

  ngOnInit(): void {
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.innerText = this._message;
  }

  // setColor(): void {
  //   this.htmlElement.nativeElement.style.color = this.color;
  // }

  // setMessage(): void {
  //   this.htmlElement.nativeElement.innerText = this.alertMessage;
  // }

}
