import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  highlightElement() {
    this.el.nativeElement.style.backgroundColor = 'white';
    this.el.nativeElement.style.color = 'black';
  }
  ngOnInit() {
    this.highlightElement();
  }
}
