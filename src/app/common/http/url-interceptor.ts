import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry, mergeMap } from 'rxjs/operators';
import { AuthService } from '../auth/auto.service';
import { Router } from '@angular/router';
@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor(private auth: AuthService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log(this.auth);
        const token = this.auth.token;
        const Baseurl = 'http://10.1.104.63:4005';
        const authReq = req.clone({
            url: (Baseurl + req.url),
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': token || ''
            })
        });

        return next.handle(authReq).pipe(tap(
            (event: any) => {
                if (event instanceof HttpResponse) {
                    console.log(event.status);
                    if (event.status === 401) {
                        console.log('失败');
                        this.auth.isLoggedIn = false;
                        this.auth.token = '';
                    }
                }
                console.log(event);
                return event;
            },
            err => {
                if (err.status === 401) {
                    console.log('重新登陆');
                    this.router.navigateByUrl('/login-page');
                    console.log(this.auth);
                    this.auth.isLoggedIn = false;
                    this.auth.token = '';
                }
            }
        );
    }
}