import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        if (req.url) {
            let Baseurl = req.url;
            // console.log(url);
            if (!Baseurl.startsWith('http')) {
                Baseurl = Baseurl.startsWith('/') ? Baseurl : `/${Baseurl}`;
                Baseurl = `http://localhost:8085${Baseurl}`;
                console.log(Baseurl);
                req['url'] = Baseurl;
                // req.clone({
                //     url: url
                // });
                console.log(req);
            }
        }
        return next.handle(req);
    }
}