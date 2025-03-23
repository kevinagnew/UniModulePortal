import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type adminUser = {
  firstname: any,
  lastname: any,
  email: any
  password: any
}

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  getTestApi(): Observable<any> {
    let apiUrl = 'http://localhost:3000/api';
    return this.http.get<any>(apiUrl);
  }

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
}

