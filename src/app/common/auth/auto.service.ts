import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutoService {
    constructor(private http: HttpClient) { }
    getLogin(param): Observable<any> {
        return this.http.post('/login', param);
    }
}