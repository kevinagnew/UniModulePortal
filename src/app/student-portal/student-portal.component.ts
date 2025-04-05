import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrl: './student-portal.component.scss'
})
export class StudentPortalComponent {

  @ViewChild('studentSideNav') studentSideNav: MatSidenav;

	studentManagementOptions = ['register', 'view'];
	selectedLanguage: string;
	chosenLang = 'en-gb';
	languages = [
		{ name: "English (UK)", value: "en-gb" },
		{ name: "Español", value: "es" },
		{ name: "Français", value: "fr" }
	]

	constructor(
		private router: Router,
		private authService: AuthService,
		private translate: TranslateService
	) {
		this.translate.setDefaultLang('en-gb');  // Set default language
    	this.translate.use('en-gb');  // Set initial language
	}

  studentLoadContent(page: string) {
		switch (page) {
			case 'dashboard':
				this.router.navigate(['student-portal', 'dashboard']);
				break;
			// case 'student-management-register':
			// 	this.router.navigate(['student-portal', 'student-management-register']);
			// 	break;
			// case 'student-management-view':
			// 	this.router.navigate(['student-portal', 'student-management-view']);
			// 	break;
			// case 'modules':
			// 	this.router.navigate(['student-portal', 'modules']);
			// 	break;
			case 'logout':
				this.authService.logoutStudent();
				this.router.navigate(['/student-portal/login']);
				break;
			default:
				console.log('Page not found');
				break;
		}
	}

	studentNavToggle() {
		this.studentSideNav.toggle();
	}

	languageChange(language: any) {
		this.translate.use(language.value);  // Switch language
	}
}
