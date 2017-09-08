import { Component } from '@angular/core';
import{DescProgramaPage} from '../desc-programa/desc-programa'
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProgramasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programas',
  templateUrl: 'programas.html',
})
export class ProgramasPage {
  programaSeleccionado:any;
  programas:any=[
                    {
                      programa:'Sabia Palabra',
                      locutor:'Jeferson',
                      imagen:'http://faroesperanza.com/images/sabiapalabra.jpg',
                      descripcion:'Estas invitado todos los Martes a nuestro programa SABIA PALABRA. Estudio profundo del libro de los libros. Interesante programa el cual te ayudará y te mostrará el plan que Jesús tiene para tu vida. Ven y anímate!'
                      },
                      {
                        programa:'Hora del Poder',
                        locutor:'Lina Archer Santana',
                        imagen:'http://faroesperanza.com/images/horadelpoder.jpg',
                        descripcion:'Estas invitado todos los Jueves a nuestro programa HORA DEL PODER. "Ésta es la confianza que tenemos al acercarnos a Dios: que si pedimos conforme a su voluntad, él nos oye"1 Juan 5:14. Necesitamos derramar nuestra alma ante el Señor y a traves de la Oración lo podemos lograr. Acompaña al Pastor Leonardo Orozco en este programa.'
                        },
                        {
                          programa:'Open Biblie',
                          Conduce: 'Henry Panameño',
                          imagen:'http://faroesperanza.com/images/open.jpg',
                          descripcion:'Open Bible(Biblia abierta) es un programa que se lleva a cabo en forma de dialogo el cual, se tratan temas los cuales son importantes para nuestra FE. Programa muy interactivo, donde nuestros oyentes darán aportes importantes a dicho tema.'
                          },
                          {
                            programa:'Circulo de la Felicidad',
                            Conduce: 'Olga Liliana Yusty',
                            imagen:'http://faroesperanza.com/images/circulo.jpg',
                            descripcion:'Estas invitado todos los Lunes a nuestro programa CIRCULO DE FELICIDAD. Si tu hogar esta teniendo problemas y crees que no hay mas remedio, antes de tomar cualquier decisión, te invitamos que escuches a nuestros invitados. El Doctor Ehiver José Olave, tienen el secreto para que tu hogar pase de hogar destruido a hogar BENDECIDO. Acompáñanos!'
                            },
                            {
                              programa:'Momento Radial',
                              Conduce: 'Grupo Radiañ',
                              imagen:'http://faroesperanza.com/images/momento.jpg',
                              descripcion:'Estas invitado todos los Domingo a nuestro programa MOMENTO RADIAL. Programa dedicado para espacios de Salud, Momentos infantiles, Juveniles, Testimonios. Acompañanos!'
                              }
                           ];
  
  
   constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramasPage');
  }

  select_programa(indexprog){
  
   this.programaSeleccionado=this.programas[indexprog];   
    this.navCtrl.push(DescProgramaPage,{datosProg:this.programaSeleccionado});
  }
}
