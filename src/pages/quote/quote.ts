import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

  

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  closePage(remove = false){

  	this.viewCtrl.dismiss(remove);
  }

}
