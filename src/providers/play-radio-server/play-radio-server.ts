import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlayRadioServerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PlayRadioServerProvider {

  constructor(public http: Http) {
    console.log('Hello PlayRadioServerProvider Provider');
  }
  getaudio(){
    return this.http.get(' http://192.99.150.42:9688/;');
   }
}
