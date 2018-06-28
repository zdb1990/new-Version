import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';




@NgModule({
    imports: [
        SharedModule,
        ComponentsRoutingModule
    ],
    exports: [],
    declarations: [...routedComponents],
    providers: [],
})
export class ComponentsModule { }
