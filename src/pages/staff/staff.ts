import { ModalpagePage } from './../modalpage/modalpage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the StaffPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
})
export class StaffPage {
  character:any;
   characters:any = [
    {
      name: 'Gollum',
      quote: 'Sneaky little hobbitses!',
      image: 'assets/img/avatar-gollum.jpg',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'River Folk' },
        { title: 'Alter Ego', note: 'Smeagol' }
      ]
    },
    {
      name: 'Frodo',
      quote: 'Go back, Sam! I\'m going to Mordor alone!',
      image: 'assets/img/avatar-frodo.jpg',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'Shire Folk' },
        { title: 'Weapon', note: 'Sting' }
      ]
    },
    {
      name: 'Samwise Gamgee',
      quote: 'What we need is a few good taters.',
      image: 'assets/img/avatar-samwise.jpg',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'Shire Folk' },
        { title: 'Nickname', note: 'Sam' }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffPage');
  }

 openModal(characterNum){ 
  
   console.log(characterNum);
   
  this.character = this.characters[characterNum];
  console.log(this.character);

  let modal = this.modalCtrl.create("ModalpagePage",{datos :this.character});
  modal.present();
 }

}



