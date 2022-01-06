/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  defaultFontSize = (this.el.nativeElement as HTMLParagraphElement).style
    .fontSize;

  @Input() defaultColor = '';

  @Input('appHighlight') highlightColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    (this.el.nativeElement as HTMLParagraphElement).style.fontSize =
      this.defaultFontSize;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    (this.el.nativeElement as HTMLParagraphElement).style.fontSize = '30px';
  }
}
