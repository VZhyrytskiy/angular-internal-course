import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective  {
  private in: number = 1.3;
  private out: number = 1;

  // constructor(private el: ElementRef) {}

  @HostBinding("style.transform") zoomed:string = this.setZoom(this.out)

  @HostListener('mouseenter') onMouseEnter() {
    this.zoomed = this.setZoom(this.in)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoomed = this.setZoom(this.out)
  }

  setZoom(size: number | string): string {
    return `scale(${size})`
  }
}
