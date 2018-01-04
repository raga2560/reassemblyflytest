import { SharedModule } from '../../../app/shared.module';
import { DraftsPage } from './drafts';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    DraftsPage,
  ],
  imports: [
    IonicPageModule.forChild(DraftsPage),
    SharedModule
  ],
  exports: [
    DraftsPage
  ]
})

export class DraftsModule { }
