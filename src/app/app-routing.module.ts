import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './common/auth/login-page/login-page.component';
import { AuthGuardService } from './common/auth/auth-guard.service';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ChartPageComponent } from './components/chart-page/chart-page.component';
const routes: Routes = [
    { path: '', redirectTo: '/login-page', pathMatch: 'full' },
    { path: 'home-page', component: HomePageComponent },
    { path: 'login-page', component: LoginPageComponent },
    { path: 'overview-page', canActivate: [AuthGuardService], component: OverviewPageComponent },
    { path: 'chart-page', component: ChartPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
})
export class AppRoutingModule { }

