import { TradePanelPage } from './tradepanel';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TradePanelPage,
  ],
  imports: [
    IonicPageModule.forChild(TradePanelPage),
  ],
  exports: [
    TradePanelPage
  ]
})

export class TradePanelPageModule { }
