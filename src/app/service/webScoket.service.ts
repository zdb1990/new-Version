import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class WebSocketService {
    ws: WebSocket;
    constructor() { }



    createObservableSocket(url: string): Observable<any> {
        this.ws = new WebSocket(url);
        // 返回一个可观测的流，包括服务器返回的消息

        return new Observable(
            observer => {
                console.log(this.ws.readyState);
                this.ws.onmessage = (event) => observer.next(event.data);
                this.ws.onerror = (event) => observer.error(event);
                this.ws.onclose = (event) => observer.complete();
            }
        );
    }
    sendMessage(message: any) {
        // console.log(message);
        this.ws.send(message);
    }
}