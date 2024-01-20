import {Component, HostListener} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

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
  }
}
