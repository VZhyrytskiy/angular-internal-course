import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { COLOR_ARR } from './shared.module';

@Directive({
  selector: '[appColory]'
})
export class ColoryDirective implements OnInit{
  @Input('appColory') defaultColor!: string;
  counter = 0

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    @Inject(COLOR_ARR) private colorArr: string[]
  ) {
    console.log('appColory')
  }

  ngOnInit() {
    this.setColor(this.defaultColor)
  }

  @HostListener('click', ['$event']) onClick(event: MouseEvent): void {
    const color = this.colorArr[++this.counter % this.colorArr.length]
    this.setColor(color)
  }

  private setColor(color: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color)
  }
}
