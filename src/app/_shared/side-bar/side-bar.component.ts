import { SideBarService } from './../_services/side-bar.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  @ViewChild('toggleSidebarNav') toggleSidebarNav: ElementRef;
  constructor(
    private sideNavService: SideBarService,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.sideNavService.toggleSidebar.subscribe(()=>{

      const checkNavClass = this.toggleSidebarNav.nativeElement.classList.contains('is-active');

      if(!checkNavClass) {
        this.renderer.addClass(this.toggleSidebarNav.nativeElement, 'is-active');
      }
      else {
        this.renderer.removeClass(this.toggleSidebarNav.nativeElement, 'is-active');
      }

    })
  }

}
