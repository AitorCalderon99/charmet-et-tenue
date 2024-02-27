import {Component, HostListener, Inject, Renderer2} from '@angular/core';
import {CommonModule, DOCUMENT, NgOptimizedImage} from '@angular/common';
import {NavigationStart, Router, RouterLink} from "@angular/router";
import {filter} from "rxjs";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isHamburgerActive: boolean | null = null;
  showWeddingNav = false;


  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.renderer.removeClass(this.document.body, 'no-scroll');
    });
  }

  toggleWeddingNav() {
    this.showWeddingNav = !this.showWeddingNav;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const largeMediaQuery = window.matchMedia('(min-width: 1024px)');

    if (this.isHamburgerActive && largeMediaQuery.matches) {
      this.toggleHamburger();
    }
  }

  toggleHamburger() {
    this.isHamburgerActive ? this.renderer.removeClass(this.document.body, 'no-scroll') : this.renderer.addClass(this.document.body, 'no-scroll');
    this.isHamburgerActive = this.isHamburgerActive ? !this.isHamburgerActive : true;
  }
}
