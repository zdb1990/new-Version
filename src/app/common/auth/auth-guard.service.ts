import { Injectable } from '@angular/core';
// 导入路由守卫
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import { DOCUMENT } from "@angular/common";
// 引入登陆服务
import { AuthService } from './auto.service';
@Injectable()
export class AuthGuardService implements CanActivate {
    // document: any;
    constructor(private router: Router, private auth: AuthService) {

    }
    /*ActivatedRouteSnapshot也可以用来遍历路由器状态树。 RouterStateSnapshot 代表路由器在某个时刻的状态。*/
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
        if (this.auth.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    }
}