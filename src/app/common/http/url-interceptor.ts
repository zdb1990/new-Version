import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const Baseurl = 'http://10.1.104.63:4005';
        const authReq = req.clone({
            url: (Baseurl + req.url),
        });
        return next.handle(authReq);
    }
}