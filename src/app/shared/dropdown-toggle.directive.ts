import {
  Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective {

  @Input('appDropdownToggle') msg: string;
  @HostBinding('class.open') appDropDownToggle: boolean = false;

  @HostListener('click') toggleDropDown(){
    this.appDropDownToggle = !this.appDropDownToggle;
  }

  @HostListener('mouseover') mouseover(){
    alert(this.msg);
  }
  constructor() { }

}
