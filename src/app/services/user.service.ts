import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user: any;

    constructor(private http: HttpClient) { }

    setUser(userData: any): void {
        this.user = userData;
        localStorage.setItem('user', JSON.stringify(this.user));
    }

    getUser() {
        if (this.user === undefined) {
            let user = localStorage.getItem('user');
            if (user) return JSON.parse(user);
        } 
        return this.user;
    }

}
