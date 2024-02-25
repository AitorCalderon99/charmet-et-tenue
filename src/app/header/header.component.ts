import {Component, HostListener, Inject, Renderer2} from '@angular/core';
import {CommonModule, DOCUMENT, NgOptimizedImage} from '@angular/common';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }


  isHamburgerActive: boolean | null = null;

  @HostListener('window:resize', ['$event'])
  onResize() {
    const largeMediaQuery = window.matchMedia('(min-width: 1024px)');

    if (this.isHamburgerActive && largeMediaQuery.matches) {
      this.toggleHamburger();
    }
  }

  toggleHamburger() {
    this.isHamburgerActive = this.isHamburgerActive ? !this.isHamburgerActive : true;
    if (this.isHamburgerActive) {
      this.renderer.addClass(this.document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(this.document.body, 'no-scroll');
    }
  }
}
