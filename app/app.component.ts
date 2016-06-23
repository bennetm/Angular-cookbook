import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { PhoneListLayoutComponent } from './phone-list-layout/phone-list-layout.component';
import { DetailLayoutComponent } from './phone-detail-layout/phone-detail-layout.component';

@RouteConfig([
    {path: '/phones', name: 'Phones', component: PhoneListLayoutComponent},
    {path: '/phones/:phoneId', name: 'Phone', component: DetailLayoutComponent},
    {path: '/', redirectTo: ['Phones']}
])
@Component({
    selector: 'phonecat-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
