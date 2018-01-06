import { WishlistPage } from './wishlist';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { WishlistService } from '../../../providers/wishlist-service';



@NgModule({
  declarations: [
    
	WishlistPage
	
  ],
  imports: [
  
    IonicPageModule.forChild(WishlistPage),
  ],
  exports: [
    WishlistPage
  ],
  providers: [
  	WishlistService
  ]
})

export class WishlistPageModule { }
