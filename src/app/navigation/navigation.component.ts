import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('navigation')navigation: ElementRef;
  @ViewChild('main')main: ElementRef;

  constructor(private renderer: Renderer2,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.main.nativeElement, 'clicked');
    // console.log('router', this.route)
    // this.route.url
    //   .subscribe( (el) => {
    //     console.log('el', el)
    //   })
  }

  addClass(target) {
    // console.log(event.target, this.navigation)
    // debugger;
    Array.from(this.navigation.nativeElement.children).forEach((el)=>{
      this.renderer.removeClass(el.children[0] , 'clicked');
    });
    if(target){
      this.renderer.addClass(this[target].nativeElement, 'clicked');
    } else {
      this.renderer.addClass(event.target, 'clicked');
    }
  }
}
