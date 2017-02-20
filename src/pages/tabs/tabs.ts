import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  template: `
  	<ion-tabs>
  		<ion-tab [root]="favouritePage" tabTitle="Favourites" tabIcon="star"></ion-tab>
  		<ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
  	</ion-tabs>
  `
})
export class TabsPage {

  favouritePage = FavouritesPage;
  libraryPage = LibraryPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
