import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class StructuralDirectiveDirective {

  @Input() set customIf( condition: boolean ){
    condition
      ? this.viewContainer.createEmbeddedView( this.templateRef )
      : this.viewContainer.clear()
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) { }

}
