import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type adminUser = {
    firstname?: any,
    lastname?: any,
    email: any,
    password: any
}

export type student = {
    firstname: any,
    lastname: any,
    email: any,
    birthday: any,
    password: any,
    studentID: any
}

@Injectable({
    providedIn: 'root',
})
export class RegisterService {

    constructor(private http: HttpClient) { }

    registerForAdmin(adminUser: adminUser): Observable<any> {
        const params = {
            firstname: adminUser.firstname,
            lastname: adminUser.lastname,
            email: adminUser.email,
            password: adminUser.password
        };
        // If all checks out successfully register for admin
        const apiUrl = 'http://localhost:3000/admin-register';
        return this.http.post<any>(apiUrl, params);
    }

    registerForStudent(student: student): Observable<any> {
        const params = {
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email,
            birthday: student.birthday,
            password: student.password,
            student_identifier: student.studentID
        };
        // If all checks out successfully register for student
        const apiUrl = 'http://localhost:3000/student-register';
        return this.http.post<any>(apiUrl, params);
    }
}

