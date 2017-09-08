import { StaffPage } from './../pages/staff/staff';



import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login';
import { PlayradioPage } from './../pages/playradio/playradio';
import { ProgramasPage } from './../pages/programas/programas';
import{DescProgramaPage} from '../pages/desc-programa/desc-programa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlayRadioServerProvider } from '../providers/play-radio-server/play-radio-server';
import { Http,HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,PlayradioPage,StaffPage,ProgramasPage,DescProgramaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,LoginPage,PlayradioPage,StaffPage,ProgramasPage,DescProgramaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayRadioServerProvider
  ]
})
export class AppModule {}
