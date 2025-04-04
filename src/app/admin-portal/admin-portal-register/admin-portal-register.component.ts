import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adminUser, RegisterService } from '../../services/register.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-admin-portal-register',
	templateUrl: './admin-portal-register.component.html',
	styleUrl: './admin-portal-register.component.scss'
})
export class AdminPortalRegisterComponent implements OnDestroy {

	// Avoid memory leaks
	private destroy$ = new Subject<void>();

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
		this.router.navigate(['/admin-portal/login']);
	}

	adminRegister() {
		const adminUser: adminUser = {
			firstname: this.adminRegisterForm.value.firstname,
			lastname: this.adminRegisterForm.value.lastname,
			email: this.adminRegisterForm.value.email,
			password: this.adminRegisterForm.value.password
		};
		this.registerService.registerForAdmin(adminUser)
		.pipe(takeUntil(this.destroy$))
		.subscribe(response => {
			this.router.navigate(['/admin-portal/login']);
		});
	}

	ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
