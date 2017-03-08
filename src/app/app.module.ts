// MODULES
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

// SERVICES
import { BarsService } from './../pages/bars/bars.service';
import { BeersService } from './../pages/beers/beers.service';
import { NearbyBarsService } from './../pages/nearby/nearby-bars.service';

// PAGES
import { ContactPage } from '../pages/contact/contact.page';
import { TabsPage } from '../pages/tabs/tabs.page';
import { BeersPage } from './../pages/beers/beers.page';
import { BarsPage } from './../pages/bars/bars.page';
import { NearbyBarsPage } from './../pages/nearby/nearby-bars.page';
import { BarDetailPage } from './../pages/bar-detail/bar-detail';
import { SuggestPage } from './../pages/suggest/suggest';
import { LoginPage } from './../pages/login/login';
import { SuggestDetailPage } from './../pages/suggest-detail/suggest-detail';
import { PermissionsPage } from './../pages/permissions/permissions';

import { MyApp } from './app.component';


@NgModule({
    declarations: [
        MyApp,
        ContactPage,
        BarsPage,
        TabsPage,
        NearbyBarsPage,
        BeersPage,
        BarDetailPage,
        SuggestPage,
        LoginPage,
        PermissionsPage,
        SuggestDetailPage
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            menuType: 'overlay',
            platforms: {
                ios: {
                    menuType: 'overlay',
                },
            },
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ContactPage,
        BarsPage,
        TabsPage,
        NearbyBarsPage,
        BeersPage,
        BarDetailPage,
        SuggestPage,
        LoginPage,
        PermissionsPage,
        SuggestDetailPage
    ],
    providers: [BarsService, NearbyBarsService, BeersService],
})
export class AppModule { }
