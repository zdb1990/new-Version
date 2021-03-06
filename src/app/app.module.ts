import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
// 引入HTTP请求
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// 引入公用组件module
import { CommonModule } from './common/common.module';
// 引入所有组件的module
import { ComponentsModule } from './components/components.module';
// 配置路由
import { AppRoutingModule } from './app-routing.module';
// 引入公用的service
import { ServiceModule } from './service/service.module';
// 引入拦截器服务并使用
import { InterceptorService } from './common/http/url-interceptor';
import { AuthModule } from './common/auth/auth.module';
import { GridsterModule } from 'angular-gridster2';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { CookieService } from 'ngx-cookie-service';
import { WebSocketService } from './service/webScoket.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    AuthModule,
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    ServiceModule,
    NgxEchartsModule,
    GridsterModule,
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [
    CookieService,
    WebSocketService,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ]
})
export class AppModule { }

