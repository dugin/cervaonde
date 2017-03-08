import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Suggest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-suggest',
  templateUrl: 'suggest.html'
})
export class SuggestPage {

  isBarFound = false;
  isLoading = false;
  isSize = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestPage');
  }


  onSearch() {

    this.setIsLoading();

    setTimeout(() => {
      this.setIsLoading();
      this.setIsBarFound();
    }, 1000);

  }

  onNewBeer() {

  }

  onSize(value: any) {
    this.isSize = true;
    console.log(value);


  }

  private setIsLoading() {
    this.isLoading = !this.isLoading;
  }

  private setIsBarFound() {
    this.isBarFound = !this.isBarFound;
  }
}
