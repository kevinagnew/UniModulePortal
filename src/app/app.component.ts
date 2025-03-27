import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  @ViewChild('adminSideNav') adminSideNav: MatSidenav;

  constructor(
    private router: Router
  ) {}
  
  adminLoadContent(page: string) {
    switch (page) {
      case 'dashboard':
        this.router.navigate(['admin-portal','dashboard']);
        break;
      case 'modules':
        this.router.navigate(['admin-portal','modules']);
        break;
      default:
        console.log('Page not found');
        break;
    }
  }

  adminNavToggle() {
    this.adminSideNav.toggle();
  }
}
