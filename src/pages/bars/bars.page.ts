import { BarDetailPage } from './../bar-detail/bar-detail';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import filter from 'lodash-es/filter';

@Component({
    selector: 'ib-page-bars',
    templateUrl: 'bars.page.html',
})
export class BarsPage {

    isLoading = true;

    constructor(public navCtrl: NavController,
        public menu: MenuController) {

        menu.enable(true);
    }

    ionViewDidLoad() {

        setTimeout(() => {
            this.setIsLoading();
        }, 1000);

    }

    onCard() {


        this.navCtrl.push(BarDetailPage);
    }

    setIsLoading() {
        this.isLoading = !this.isLoading;
    }
}
