import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AutoService {
    constructor(private http: HttpClient) { }
    getLogin(param?: any): Observable<any> {
        return this.http.get('/api/assess/assesses', { params: param });
    }
}