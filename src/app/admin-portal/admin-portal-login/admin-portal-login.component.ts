import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-admin-portal-login',
  templateUrl: './admin-portal-login.component.html',
  styleUrl: './admin-portal-login.component.scss'
})
export class AdminPortalLoginComponent implements OnInit {

    constructor(
        private router: Router,
        private registerService: RegisterService
    ) {}

    ngOnInit() {
        this.registerService.getTestApi().subscribe(test => {
            console.log(test);
        });
    }

    navigateToAdminRegister(): void {
        this.router.navigate(['/admin-portal-register']);
    }
}
