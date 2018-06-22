import { NgModule } from '@angular/core';
// 引入登陆的请求服务
import { AuthService } from './../common/auth/auto.service';
import { AutoModule } from './../common/auth/auth.module';
@NgModule({
    imports: [
        AutoModule
    ],
    exports: [],
    declarations: [],
    providers: [AuthService],
})
export class ServiceModule { }
