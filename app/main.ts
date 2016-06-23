import {
    LocationStrategy,
    HashLocationStrategy,
    APP_BASE_HREF
} from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AppComponent } from './app.component';
import {PhoneSvc} from "./services/phone/phone.service";


bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    { provide: APP_BASE_HREF, useValue: '!' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    PhoneSvc
]);
