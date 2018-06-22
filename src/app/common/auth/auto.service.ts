import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    token: any;
    constructor(private http: HttpClient) { }
    // getLogin(params): Observable<any> {
    //     return this.http.post('/login', params);
    // }
    getLogin(params): Observable<any> {
        // The Observable returned by get() is of type Observable<string>
        // because a text response was specified.
        // There's no need to pass a <string> type parameter to get().
        return this.http.post('/login', params)
            .pipe(
                tap( // Log the result or error
                    obj => {
                        this.token = obj.data.token.access_token;
                        console.log(this.token);
                        return this.token;
                    },
                    error => console.log(error)
                )
            );
    }
    getUseList(): Observable<any> {
        return this.http.get('/auth/users');
    }
}