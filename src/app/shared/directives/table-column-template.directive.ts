import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {TemplatePortalDirective} from "@angular/cdk/portal";

@Directive({
  selector: '[appTableColumnTemplate]'
})
export class TableColumnTemplateDirective extends TemplatePortalDirective {
  @Input() columnName: string;
  @Input() header = false;

  constructor(templateRef: TemplateRef<any>,
              vewContainerRef: ViewContainerRef)
  {
    super(templateRef, vewContainerRef)
  }

}
