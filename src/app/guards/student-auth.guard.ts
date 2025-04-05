import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class StudentAuthGuard implements CanActivate {
	constructor(
		private authService: AuthService, 
		private router: Router
	) { }

	canActivate(): boolean {
		if (this.authService.isStudentLoggedIn()) {
			return true;
		} else {
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['admin-portal']);
        return false;
      }
			this.router.navigate(['student-portal/login']);
			return false;
		}
	}
}
