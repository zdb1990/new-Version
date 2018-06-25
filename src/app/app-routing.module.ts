import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './common/auth/login-page/login-page.component';
import { AuthGuardService } from './common/auth/auth-guard.service';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
const routes: Routes = [
    { path: '', redirectTo: '/login-page', pathMatch: 'full' },
    { path: 'login-page', component: LoginPageComponent },
    { path: 'home-page', canActivate: [AuthGuardService], component: HomePageComponent },
    { path: 'overview-page', canActivate: [AuthGuardService], component: OverviewPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
})
export class AppRoutingModule { }

