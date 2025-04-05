import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { student } from '../../services/register.service';

@Component({
  selector: 'app-student-portal-login',
  templateUrl: './student-portal-login.component.html',
  styleUrl: './student-portal-login.component.scss'
})
export class StudentPortalLoginComponent {
    // Avoid memory leaks
    private destroy$ = new Subject<void>();

    studentLoginForm = new FormGroup({
        studentID: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private router: Router,
        private authService: AuthService,
        private userService: UserService
    ) { }

    studentLogin() {
        const student: student = {
            studentID: this.studentLoginForm.value.studentID,
            password: this.studentLoginForm.value.password
        };
        this.authService.studentLogin(student.studentID, student.password)
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
                if (response.success) {
                    this.authService.setStudentToken(response.token);
                    try {
                        // set user
                        // this.userService.setUser(response.admin);
                        this.router.navigate(['student-portal','dashboard']);
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
