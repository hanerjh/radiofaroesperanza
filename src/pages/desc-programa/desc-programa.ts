import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DescProgramaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-desc-programa',
  templateUrl: 'desc-programa.html',
})
export class DescProgramaPage {
    programa:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.programa=this.navParams.get("datosProg");
  }

 

  ionViewDidLoad() {
    this.programa=this.navParams.get("datosProg");
    console.log('ionViewDidLoad DescProgramaPage '+this.programa.imagen);
  }

}
