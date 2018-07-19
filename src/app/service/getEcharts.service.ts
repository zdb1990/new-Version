import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class GetEchartsService {
    constructor(private http: HttpClient) { }
    echartsdata(): Observable<any> {
        return this.http.get('./../../assets/jsons/data.json');
    }
}
