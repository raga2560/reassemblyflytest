import { StatusPage } from './status';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    StatusPage,
  ],
  imports: [
    IonicPageModule.forChild(StatusPage),
  ],
  exports: [
    StatusPage
  ]
})

export class StatusPageModule { }
