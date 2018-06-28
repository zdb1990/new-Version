import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { ContentComponent } from './home-page/content/content.component';
import { SiderComponent } from './home-page/sider/sider.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
const routes: Routes = [

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsRoutingModule { }

export const routedComponents = [
    HomePageComponent,
    HeaderComponent,
    OverviewPageComponent,
    ContentComponent,
    SiderComponent,
    FooterComponent,
    ChartPageComponent
];