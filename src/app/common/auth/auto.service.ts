import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    token: any;
    isLoggedIn: Boolean;
    constructor(private http: HttpClient) { }
    // 登录用户
    Login(params?: any): Observable<any> {
        return this.http.post('/login', params)
            .pipe(
                tap(
                    obj => {
                        this.token = obj.data.token.access_token;
                        this.isLoggedIn = true;
                        return true;
                    },
                    error => {
                        this.isLoggedIn = false;
                        return false;
                    }
                )
            );
    }
    // 退出登录
    Loginout(params?: any): Observable<any> {
        console.log(params);
        return this.http.post('/logout', params)
            .pipe(
                tap(
                    obj => {
                        this.isLoggedIn = false;
                    },
                    error => {
                        this.isLoggedIn = true;
                        return false;
                    }
                )
            );
    }
    getUseList(): Observable<any> {
        return this.http.get('/auth/users');
    }
}