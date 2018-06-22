import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: any;
    constructor(private http: HttpClient) { }
    // getLogin(params): Observable<any> {
    //     return this.http.post('/login', params);
    // }
    getLogin(params?: any): Observable<any> {
        return this.http.post('/login', params)
            .pipe(
                tap( // Log the result or error
                    obj => {
                        this.token = obj.data.token.access_token;
                        return true;
                        // return { 'token': this.token, 'canactive': true };
                    },
                    error => {
                        // console.log(error.status)
                        if (error.status === 401) {
                            return false;
                        }
                    }
                )
            );
    }
    getUseList(): Observable<any> {
        return this.http.get('/auth/users');
    }
}