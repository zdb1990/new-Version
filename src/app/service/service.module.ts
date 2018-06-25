import { NgModule } from '@angular/core';
// 引入登陆的请求服务
import { AuthService } from './../common/auth/auto.service';
import { AuthModule } from './../common/auth/auth.module';
@NgModule({
    imports: [
        AuthModule
    ],
    exports: [],
    declarations: [],
    providers: [AuthService],
})
export class ServiceModule { }
