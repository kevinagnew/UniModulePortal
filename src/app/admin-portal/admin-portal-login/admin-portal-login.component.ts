import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { adminUser } from '../../services/register.service';
import { AuthService } from '../../services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-admin-portal-login',
    templateUrl: './admin-portal-login.component.html',
    styleUrl: './admin-portal-login.component.scss'
})
export class AdminPortalLoginComponent implements OnInit, OnDestroy {

    // Avoid memory leaks
    private destroy$ = new Subject<void>();

    adminLoginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private router: Router,
        private authService: AuthService,
        private userService: UserService
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
        this.authService.adminLogin(adminUser.email, adminUser.password)
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
                if (response.success) {
                    this.authService.setAdminToken(response.token);
                    try {
                        // set user
                        this.userService.setUser(response.admin);
                        this.router.navigate(['admin-portal']);
                    } catch (err) {
                        console.warn({ error: err });
                    }
                } else {
                    alert(response.message);
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
