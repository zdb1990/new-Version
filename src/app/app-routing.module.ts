import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './common/auth/login-page/login-page.component';
import { AuthGuardService } from './common/auth/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    {
        path: 'home-page', component: HomePageComponent,
        children: [
            { path: 'home-page', canActivate: [AuthGuardService], loadChildren: './components/components.module#ComponentsModule' }
        ]
    },
    { path: 'login-page', component: LoginPageComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

