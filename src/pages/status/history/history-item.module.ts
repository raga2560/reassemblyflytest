import { HistoryItemPage } from './history-item';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HistoryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryItemPage),
  ],
  exports: [
    HistoryItemPage
  ]
})

export class HistoryItemPageModule { }
