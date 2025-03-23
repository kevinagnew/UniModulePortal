import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { adminUser } from '../../../services/register.service';

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
        private registerService: RegisterService
    ) {}

    ngOnInit() { }

    navigateToAdminRegister(): void {
        this.router.navigate(['/admin-portal-register']);
    }

    adminLogin() {
        const adminUser: adminUser = {
			email: this.adminLoginForm.value.email,
			password: this.adminLoginForm.value.password
		};
        this.registerService.loginForAdmin(adminUser).subscribe(response => {
            console.log("KA - loginAdmin: ", response);
            if (response.success) {
                this.router.navigate(['/admin-portal/dashboard']);
            } else {
                alert(response.message);
            }
		});
    }
}
