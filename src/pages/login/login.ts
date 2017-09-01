import { PlayradioPage } from './../playradio/playradio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
 
})
export class LoginPage {
   runvideo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.runvideo="autoplay"
  }

  
  ionViewDidLoad() {
    this.runvideo="autoplay"
    console.log('ionViewDidLoad LoginPage');
  }

    ionViewDidLeave(){
    
    }

  playRadio(){
    this.navCtrl.push(PlayradioPage);
  }

}
