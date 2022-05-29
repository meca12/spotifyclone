import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customimg : string = ''
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement;
    console.log('ESTA IMAGEN REVENTO', this.elHost);
    elNative.src = this.customimg;

    
  }
  constructor(private elHost: ElementRef) { 
    console.log(this.elHost);
  }

}

