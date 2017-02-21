import { Component , OnInit} from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

/*
  Generated class for the Quotes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{

  quoteGroup : {category:string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController, 
              public quotesService: QuotesService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    //this.quoteGroup = this.navParams.data;
    // <ion-title>{{ quoteGroup?.category | uppercase }}</ion-title> 
  }

  ngOnInit () {
	this.quoteGroup = this.navParams.data;
  }

  addToFavourites(selectedQuote: Quote){
  	const alert = this.alertCtrl.create({
  		title: 'Add Quote',
  		subTitle: 'Are you sure?',
  		message: 'Add this quote?',
  		buttons: [
  			
  			{
  				text: 'NO',
  				role: 'cancel',
  				handler: () => {
  					console.log('NO Pressed');
  				}
  			},
  			{
  				text: 'YES',
  				handler: () => {
  					console.log('YES Pressed');
            this.quotesService.addQuoteToFavourites(selectedQuote);
  				}
  			},
  		]
  	});

  	alert.present();
  }

  removeFromFavourites(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Remove this quote?',
      buttons: [
        
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('NO Pressed');
          }
        },
        {
          text: 'YES',
          handler: () => {
            console.log('YES Pressed');
            this.quotesService.removeQuoteFromFavourites(selectedQuote);
          }
        },
      ]
    });

    alert.present();
  }

  isFavourite(quote: Quote){
    return this.quotesService.isQuoteFavourite(quote);
  }

}
