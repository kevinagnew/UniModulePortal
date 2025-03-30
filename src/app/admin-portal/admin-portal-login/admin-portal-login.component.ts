import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { adminUser } from '../../services/register.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-admin-portal-login',
    templateUrl: './admin-portal-login.component.html',
    styleUrl: './admin-portal-login.component.scss'
})
export class AdminPortalLoginComponent implements OnInit {

    adminLoginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() { }

    navigateToAdminRegister(): void {
        this.router.navigate(['/admin-portal/register']);
    }

    adminLogin() {
        const adminUser: adminUser = {
            email: this.adminLoginForm.value.email,
            password: this.adminLoginForm.value.password
        };
        this.authService.adminLogin(adminUser.email, adminUser.password).subscribe(response => {
            if (response.success) {
                this.authService.setAdminToken(response.token);
                try {
                    this.router.navigate(['admin-portal']);
                } catch (err) {
                    console.warn({error: err});
                }
            } else {
                alert(response.message);
            }
        });
    }
}
