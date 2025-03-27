import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.scss'
})
export class AdminPortalComponent {

  @ViewChild('adminSideNav') adminSideNav: MatSidenav;

  adminNavToggle() {
    this.adminSideNav.toggle();
  }
}
