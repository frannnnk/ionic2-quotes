import { Component , OnInit} from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    //this.quoteGroup = this.navParams.data;
    // <ion-title>{{ quoteGroup?.category | uppercase }}</ion-title> 
  }

  ngOnInit () {
	this.quoteGroup = this.navParams.data;
  }

  addToFavourite(selectedQuote: Quote){
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
  				}
  			},
  		]
  	});

  	alert.present();
  }

}
