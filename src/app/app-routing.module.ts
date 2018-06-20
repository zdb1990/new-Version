import { HomePageComponent } from './common/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './common/auth/login-page/login-page.component';
import { AuthGuardService } from './common/auth/auth-guard.service';
const routes: Routes = [
    { path: '', redirectTo: '/login-page', pathMatch: 'full' },
    { path: 'login-page', component: LoginPageComponent },
    { path: 'home-page', canActivate: [AuthGuardService], component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
})
export class AppRoutingModule { }

