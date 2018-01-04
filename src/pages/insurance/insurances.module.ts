import { InsurancesPage } from './insurances';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    InsurancesPage,
  ],
  imports: [
    IonicPageModule.forChild(InsurancesPage),
  ],
  exports: [
    InsurancesPage
  ]
})

export class InsurancesPageModule { }
