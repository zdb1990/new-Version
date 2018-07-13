import { NgModule } from '@angular/core';
// 引入登陆的请求服务
import { AuthService } from './../common/auth/auto.service';
import { AuthModule } from './../common/auth/auth.module';
import { WebSocketService } from './webScoket.service';

@NgModule({
    imports: [
        AuthModule
    ],
    exports: [],
    declarations: [],
    providers: [AuthService, WebSocketService],
})
export class ServiceModule { }
