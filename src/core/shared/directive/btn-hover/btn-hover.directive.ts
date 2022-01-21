import { Directive,ElementRef,Renderer2,HostListener,OnInit,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBtnHover]'
})
export class BtnHoverDirective implements OnInit {

  constructor(private EL:ElementRef,private RD2:Renderer2) { }

  ngOnInit(): void {
    this.RD2.setStyle(this.EL.nativeElement,"border","2px solid #000");
  }

  @Input() defaultColor:string = 'transparent';
  @HostBinding('style.backgroundColor') bgColor!:string;
  @HostBinding('style.border-radius')  border!:string;



  @HostListener('mouseenter') inHover(){
    this.RD2.setStyle(this.EL.nativeElement,'box-shadow','0 0 3px 4px rgba(0,0,0,0.4),inset 0 0 3px 4px rgba(255,255,255,0.6) ')
    this.bgColor ='#000'
    this.border = '10px'
    this.RD2.setStyle(this.EL.nativeElement,'transition','all 0.6s')
  }

  @HostListener('mouseleave') outHover(){
    this.bgColor = this.defaultColor;
    this.border = '0'
    this.RD2.setStyle(this.EL.nativeElement,'box-shadow','none')
    this.RD2.setStyle(this.EL.nativeElement,'transition','all 0.6s')
  }

  // @HostListener('focus') focus(){
  //   this.bgColor = '#05f'
  // }

  @HostListener('click') clickUp(){
    this.bgColor = 'aqua'
  }


}
