import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-admin-portal',
	templateUrl: './admin-portal.component.html',
	styleUrl: './admin-portal.component.scss'
})
export class AdminPortalComponent implements OnInit {

	@ViewChild('adminSideNav') adminSideNav: MatSidenav;

	studentManagementOptions = ['register', 'view'];

	constructor(
		private router: Router,
		private authService: AuthService
	) {
	}

	ngOnInit(): void { }

	adminLoadContent(page: string) {
		switch (page) {
			case 'dashboard':
				this.router.navigate(['admin-portal', 'dashboard']);
				break;
			case 'student-management-register':
				this.router.navigate(['admin-portal', 'student-management-register']);
				break;
			case 'student-management-view':
				this.router.navigate(['admin-portal', 'student-management-view']);
				break;
			case 'modules':
				this.router.navigate(['admin-portal', 'modules']);
				break;
			case 'logout':
				this.authService.logout();
				this.router.navigate(['/admin-portal/login']);
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
