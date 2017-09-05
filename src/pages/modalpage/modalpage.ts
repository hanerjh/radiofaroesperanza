import { Component } from '@angular/core';
import { IonicPage, NavParams,ViewController,ModalController } from 'ionic-angular';

/**
 * Generated class for the ModalpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalpage',
  templateUrl: 'modalpage.html',
})
export class ModalpagePage {
datos2:any;
  constructor( public navParams: NavParams,private view:ViewController) {
      this.datos2=this.navParams.get("datos");
      console.log(this.datos2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalpagePage');
  }

  closeModal(){
  this.view.dismiss();
  }

}
