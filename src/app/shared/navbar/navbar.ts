import { Component } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']   // 👈 correct key (plural)
})
export class NavbarComponent {

  isOpen = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Close menu on route change
        this.isOpen = false;
        document.body.classList.remove('menu-open');
      });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;

    document.body.classList.toggle('menu-open', this.isOpen);
  }
}