import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 引入ngfor ngif指令所需的module;
import { CommonModule } from '@angular/common';
// 引入路由
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
// 配置表单和动态表单
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// 配置cookie;
import { CookieModule } from 'ngx-cookie';
// 配置路由
import { RouterModule } from '@angular/router';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@NgModule({
    imports: [
        BrowserAnimationsModule,
        RouterModule,
        /** 导入 ng-zorro-antd 模块 **/
        NgZorroAntdModule,
        /**导入基本指令像模块NgIf，NgForOf... **/
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CookieModule,
    ],
    exports: [
        BrowserAnimationsModule,
        RouterModule,
        NgZorroAntdModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CookieModule
    ],
    declarations: [],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class SharedModule {

}
