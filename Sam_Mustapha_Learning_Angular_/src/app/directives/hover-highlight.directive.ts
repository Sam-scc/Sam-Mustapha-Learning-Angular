import { Directive, HostListener, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  @Input() appHoverHighlight= '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
   this.highlight(this.appHoverHighlight || 'lightblue'); 
  }
  @HostListener('mouseleave') onMouseLeave() {
   this.highlight('');
   }
  private highlight(color: string) {
   this.el.nativeElement.style.backgroundColor = color;

}
}
