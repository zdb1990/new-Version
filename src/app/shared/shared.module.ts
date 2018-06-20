import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 引入ngfor ngif指令所需的module;
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@NgModule({
    imports: [
        BrowserAnimationsModule,
        /** 导入 ng-zorro-antd 模块 **/
        NgZorroAntdModule,
        /**导入基本指令像模块NgIf，NgForOf... **/
        CommonModule,
    ],
    exports: [
        BrowserAnimationsModule,
        NgZorroAntdModule,
        CommonModule,
    ],
    declarations: [],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class SharedModule {

}
