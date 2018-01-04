import { SharedModule } from '../../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionListingPage } from './transaction-listing';

@NgModule({
  declarations: [
    TransactionListingPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionListingPage),
    SharedModule,
  ],
  exports: [
    TransactionListingPage
  ]
})
export class TransactionListingPageModule {}
