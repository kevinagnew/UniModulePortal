import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.scss'
})
export class AdminPortalComponent implements OnInit {

  @ViewChild('adminSideNav') adminSideNav: MatSidenav;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.navigate(['/admin-portal']);
    // this.router.navigate([
    //   { outlets: { dashboard: ['dashboard'] } }
    // ]);
  }

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
