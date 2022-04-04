import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el:ElementRef) { }
    @HostListener('mouseover')mouseover(){
      this.el.nativeElement.style.backgroundColor="#94dddf";
    }
    @HostListener('mouseout')mouseout(){
      this.el.nativeElement.style.backgroundColor="white";
    }
}
