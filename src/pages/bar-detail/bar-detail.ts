import { Component, ElementRef, ViewChild, ApplicationRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google: any;
/*
  Generated class for the BarDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bar-detail',
  templateUrl: 'bar-detail.html'
})
export class BarDetailPage {

  isSeeMore = false;
  @ViewChild('card') elementView: ElementRef;
  cardHeight: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public app: ApplicationRef) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarDetailPage');
    this.initMap();
    this.cardHeight = (this.elementView.nativeElement.offsetHeight - 110) + 'px';
  }

  onSeeMore() {
    this.isSeeMore = !this.isSeeMore;

  }

  initMap() {

    const myLatLng = { lat: -22.982532, lng: -43.225675 };

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: myLatLng,
      disableDefaultUI: true,
    });

    const pinIcon = new google.maps.MarkerImage(
      'assets/icon/localizacao_brown.svg',
      null, /* size is determined at runtime */
      null, /* origin is 0,0 */
      null, /* anchor is bottom center of the scaled image */
      new google.maps.Size(40, 40),
    );

    new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: pinIcon,
    });





  }

}
