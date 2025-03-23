import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adminUser, RegisterService } from '../../../services/register.service';

@Component({
	selector: 'app-admin-portal-register',
	templateUrl: './admin-portal-register.component.html',
	styleUrl: './admin-portal-register.component.scss'
})
export class AdminPortalRegisterComponent {

	adminRegisterForm = new FormGroup({
		firstname: new FormControl('', Validators.required),
		lastname: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		emailConfirm: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required),
		passwordConfirm: new FormControl('', Validators.required),
	});

	constructor(
		private router: Router,
		private registerService: RegisterService
	) { }

	navigateToAdminLogin(): void {
		this.router.navigate(['/admin/login']);
	}

	adminRegister() {
		console.log("KA - form: ", this.adminRegisterForm.value);
		// TODO: Checks for validation/verification
		const adminUser: adminUser = {
			firstname: this.adminRegisterForm.value.firstname,
			lastname: this.adminRegisterForm.value.lastname,
			email: this.adminRegisterForm.value.email,
			password: this.adminRegisterForm.value.password
		};
		this.registerService.registerForAdmin(adminUser).subscribe(response => {
			console.log("KA - registerAdmin: ", response);
		});
	}
}
