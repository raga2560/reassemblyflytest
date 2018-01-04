import { InsureDetailPage } from './insurelist';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    InsureDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InsureDetailPage),
  ],
  exports: [
    InsureDetailPage
  ]
})

export class InsureDetailPageModule { }
