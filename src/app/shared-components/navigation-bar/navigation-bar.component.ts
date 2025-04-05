import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent implements OnInit {

	isAdmin: boolean = false;

	// Event Emitters
	@Output() toggleAdminNav = new EventEmitter<boolean>();
	@Output() toggleStudentNav = new EventEmitter<boolean>();

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit(): void {
		// Determine if its an admin or student and hide/show the correct nav
		if (this.authService.isLoggedIn()) {
			// Admin logged in
			this.isAdmin = true;
		} else if(this.authService.isStudentLoggedIn()){
			// Student logged in
			this.isAdmin = false;
		}
	}

	toggleAdminNavigation(): void {
		this.toggleAdminNav.emit();
	}

	adminLogout(): void {
		this.authService.logout();
		this.router.navigate(['/admin-portal/login']);
	}

	toggleStudentNavigation(): void {
		this.toggleStudentNav.emit();
	}

	studentLogout(): void {
		this.authService.logoutStudent();
		this.router.navigate(['/student-portal/login']);
	}
}
