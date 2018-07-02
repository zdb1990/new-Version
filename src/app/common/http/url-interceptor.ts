import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auto.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor(private auth: AuthService, private router: Router, private cookie: CookieService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log(this.cookie.get('usercookie'));
        const token = this.cookie.get('usercookie');
        console.log(token);
        const Baseurl = 'http://10.1.104.63:4005';
        const authReq = req.clone({
            url: (Baseurl + req.url),
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': token || ''
            })
        });

        return next.handle(authReq).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        if (event.status === 401) {
                            console.log('请求失败');
                            this.cookie.delete('usercookie');
                            this.auth.isLoggedIn = false;
                            this.router.navigateByUrl('/login-page');
                        }
                    }
                    return event;
                },
                err => {
                    if (err.status === 401) {
                        console.log('重新登陆');
                        this.cookie.delete('usercookie');
                        this.auth.isLoggedIn = false;
                        this.router.navigateByUrl('/login-page');
                        return err;
                    }
                }
            )
        );
    }
};