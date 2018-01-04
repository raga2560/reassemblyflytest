import { InsuranceListPage } from './insurelist';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    InsuranceListPage,
  ],
  imports: [
    IonicPageModule.forChild(InsuranceListPage),
  ],
  exports: [
    InsuranceListPage
  ]
})

export class InsuranceListPageModule { }
