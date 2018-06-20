import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        if (req.url) {
            let url = req.url;
            if (!url.startsWith('http')) {
                url = url.startsWith('/') ? url : `/${url}`;
                url = `http://localhost:8085${url}`;
                console.log(url, req);
                // req.url = url;
            }
        }
        return next.handle(req);
    }
}