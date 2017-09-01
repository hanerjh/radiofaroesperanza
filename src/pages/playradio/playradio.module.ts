import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayradioPage } from './playradio';

@NgModule({
  declarations: [
    PlayradioPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayradioPage),
  ],
})
export class PlayradioPageModule {}
