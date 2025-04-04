import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService, student } from '../../services/register.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-admin-portal-student-management-register',
    templateUrl: './admin-portal-student-management-register.component.html',
    styleUrl: './admin-portal-student-management-register.component.scss'
})
export class AdminPortalStudentManagementRegisterComponent implements OnDestroy {

    // Avoid memory leaks
    private destroy$ = new Subject<void>();

    registerStudentForm = new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        birthday: new FormControl('', Validators.required)
    });

    constructor(
        private registerService: RegisterService
    ) { }

    registerStudent(): void {
        const student: student = {
            firstname: this.registerStudentForm.value.firstname,
            lastname: this.registerStudentForm.value.lastname,
            email: this.registerStudentForm.value.email,
            birthday: this.registerStudentForm.value.birthday,
            password: '',
            studentID: ''
        };
        // Generate random password
        student.password = '1234';
        this.registerService.registerForStudent(student)
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
                let student_id = response?.student?.student_id;
                if (student_id) {
                    let student_identification = 'B000000' + student_id;
                    this.registerService.updateStudentIdentification(student_id, student_identification)
                        .pipe(takeUntil(this.destroy$))
                        .subscribe(res => {
                            console.log(res);
                        });
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
