import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

	// Event Emitters
	@Output() toggleAdminNav = new EventEmitter<boolean>();

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	toggleAdminNavigation(): void {
		this.toggleAdminNav.emit();
	}

	adminLogout(): void {
		this.authService.logout();
		this.router.navigate(['/admin-portal/login']);
	}
}
