import { Injectable } from '@angular/core';
// 导入路由守卫
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { isPending } from 'q';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router) {

    }
    /*ActivatedRouteSnapshot也可以用来遍历路由器状态树。 RouterStateSnapshot 代表路由器在某个时刻的状态。*/
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // console.log('路由', route);
        // console.log(state.url);
        return false;
    }
    // 判断打开的设备
    /*判断当前设备跳转到指定地址。PCurl:PC端地址；WebUel:PC端地址；*/
    // judgmentEquipment(): boolean {
    //     let isPc;
    //     let sUserAgent = navigator.userAgent.toLowerCase();
    //     let bIsIpad = sUserAgent.match(/ipad/i) && sUserAgent.match(/ipad/i).toString() == 'ipad';
    //     let bIsIphoneOs = sUserAgent.match(/iphone os/i) && sUserAgent.match(/iphone os/i).toString() == 'iphone os';
    //     let bIsMidp = sUserAgent.match(/midp/i) && sUserAgent.match(/midp/i).toString() == 'midp';
    //     let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) && sUserAgent.match(/rv:1.2.3.4/i).toString() == 'rv:1.2.3.4';
    //     let bIsUc = sUserAgent.match(/ucweb/i) && sUserAgent.match(/ucweb/i).toString() == 'ucweb';
    //     let bIsAndroid = sUserAgent.match(/android/i) && sUserAgent.match(/android/i).toString() == 'android';
    //     let bIsCE = sUserAgent.match(/windows ce/i) && sUserAgent.match(/windows ce/i).toString() == 'windows ce';
    //     let bIsWM = sUserAgent.match(/windows mobile/i) && sUserAgent.match(/windows mobile/i).toString() == 'windows mobile';
    //     if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    //         isPc = true;
    //     } else {
    //         isPc = false;
    //     }
    //     return isPc;
    // }
}