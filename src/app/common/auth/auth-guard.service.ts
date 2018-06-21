import { Injectable } from '@angular/core';
// 导入路由守卫
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router) {

    }
    /*ActivatedRouteSnapshot也可以用来遍历路由器状态树。 RouterStateSnapshot 代表路由器在某个时刻的状态。*/
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // console.log('路由', route);
        console.log(state);
        return false;
    }
}