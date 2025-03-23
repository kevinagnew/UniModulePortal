import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal-login',
  templateUrl: './admin-portal-login.component.html',
  styleUrl: './admin-portal-login.component.scss'
})
export class AdminPortalLoginComponent {

    constructor(private router: Router) {}

    navigateToAdminRegister(): void {
        this.router.navigate(['/admin-portal-register']);
    }
}
