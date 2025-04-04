import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-admin-portal-student-management-view',
    templateUrl: './admin-portal-student-management-view.component.html',
    styleUrl: './admin-portal-student-management-view.component.scss'
})
export class AdminPortalStudentManagementViewComponent implements OnDestroy {

    // Avoid memory leaks
    private destroy$ = new Subject<void>();

    viewStudentForm = new FormGroup({
        student_identification: new FormControl('', Validators.required)
    });
    studentData: any;

    constructor(private registerService: RegisterService) { }

    viewStudent(): void {
        let student_identification = this.viewStudentForm.value.student_identification;
        this.registerService.viewStudent(student_identification)
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
                this.studentData = response.student;
            });
    }

    clearStudentData(): void {
        this.studentData = null;
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
