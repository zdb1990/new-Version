import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { LoginPageComponent } from './login-page/login-page.component';
@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [
        LoginPageComponent,
    ],
    providers: [AuthGuardService],
})
export class AutoModule { }
