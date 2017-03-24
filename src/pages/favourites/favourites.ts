import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';

/*
  Generated class for the Favourites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {
  quotes: Quote[];
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public quotesService: QuotesService,
  			  public modalCtrl: ModalController,
          public menuCtrl: MenuController, 
          public settingsService: SettingsService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  ionViewWillEnter(){
  	this.quotes = this.quotesService.getFavouriteQuotes(); //copy the array
  	console.log('ionViewWillEnter FavouritesPage');
  }

  viewQuote(quote: Quote){
  	const modal = this.modalCtrl.create(QuotePage, quote);
  	modal.present();
  	modal.onDidDismiss( (remove: boolean) =>  {
  		console.log("onDidDismiss: remove? "+remove);
  		if (remove) {
  			this.removeFromFavourites(quote);
  		}
  	});

  	modal.willLeave.subscribe(
  		(remove: boolean) => console.log("willLeave: remove? "+remove)
  	);
  }

  removeFromFavourites(quote: Quote){
        this.quotesService.removeQuoteFromFavourites(quote);
        this.quotes = this.quotesService.getFavouriteQuotes(); 
  }

  openMenu(){
    this.menuCtrl.open();
  }

  getBackground(){
    return this.settingsService.isBooleanSettingChecked("altBackground")?"altQuoteBackground":"quoteBackground"
  }

}
