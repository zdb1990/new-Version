import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { AuthService } from '../auth/auto.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor(private auth: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
        return next.handle(authReq);
    }
}