import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/admin-login'; // Backend URL

    constructor(private http: HttpClient) { }

    adminLogin(email: string, password: string): Observable<any> {
        return this.http.post<any>(this.apiUrl, { email, password });
    }

    setAdminToken(token: string): void {
        localStorage.setItem('adminToken', token);
    }

    getAdminToken(): string | null {
        return localStorage.getItem('adminToken');
    }

    logout(): void {
        localStorage.removeItem('adminToken');
    }

    isLoggedIn(): boolean {
        return !!this.getAdminToken();
    }
}
