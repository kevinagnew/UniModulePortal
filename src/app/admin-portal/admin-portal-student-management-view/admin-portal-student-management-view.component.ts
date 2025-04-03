import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-admin-portal-student-management-view',
  templateUrl: './admin-portal-student-management-view.component.html',
  styleUrl: './admin-portal-student-management-view.component.scss'
})
export class AdminPortalStudentManagementViewComponent {

    
    viewStudentForm = new FormGroup({
        student_identification: new FormControl('', Validators.required)
    });
    studentData: any;

    constructor(private registerService: RegisterService) {}

    viewStudent(): void {
        let student_identification = this.viewStudentForm.value.student_identification;
        this.registerService.viewStudent(student_identification).subscribe(response => {
            this.studentData = response.student;
        });
    }

}
