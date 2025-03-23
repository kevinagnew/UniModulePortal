import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal-register',
  templateUrl: './admin-portal-register.component.html',
  styleUrl: './admin-portal-register.component.scss'
})
export class AdminPortalRegisterComponent {

    constructor(private router: Router) {}

    navigateToAdminLogin(): void {
        this.router.navigate(['/admin/login']);
    }
}
