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
      name: 'Juan Carlos Ogeda',
      quote: 'Nacio el 29 de Febrero de 1988. En el ambito laboral, actualmente se desempenpeña en el area de informática. Casado y con una hija',
      image: 'http://faroesperanza.com/images/Dir.jpg',
      cargo:'Director General',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'River Folk' },
        { title: 'Alter Ego', note: 'Smeagol' }
      ]
    },
    {
      name: 'Lina Marcela Archer S.',
      quote: ' Nacio en Buenaventura - Valle del cauca. Conduce el programa "Hora del Poder" todos los Jueves, en el horario de las 7:00pm en COLOMBIA',
      image: 'http://faroesperanza.com/images/Locutor1.jpg',
      cargo:'Locutora',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'Shire Folk' },
        { title: 'Weapon', note: 'Sting' }
      ]
    },
    {
      name: 'Olga Liliana Yusti M.',
      quote: 'Nacio del 18 de Octubre. Labora en la SP Buenaventura/Valle del Cauca. Conduce el programa "Circulo de Felicidad" los dias Lunes, en el horacio de las 7:00pm COL en la Radio Faro de esperanza',
      cargo:'locutora',
      image: 'http://faroesperanza.com/images/Locutor2.jpg',
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



