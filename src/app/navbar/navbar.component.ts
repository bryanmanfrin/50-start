import {Component, ElementRef, AfterViewInit, HostListener} from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  navbarOpen = false;
  constructor(private eRef: ElementRef, public _authService: AuthService) { }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target) && this.navbarOpen) {
      this.toggleNavbar();
    }
  }

  ngAfterViewInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this._authService.logout();
  }
}
