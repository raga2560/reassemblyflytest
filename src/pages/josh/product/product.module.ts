import { ProductPage } from './product';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Products } from '../../../providers/products';
//import { WishlistPage } from '../wishlist/wishlist';
import { WishlistService } from '../../../providers/wishlist-service';



@NgModule({
  declarations: [
    ProductPage,
//	WishlistPage
	
  ],
  imports: [
  
    IonicPageModule.forChild(ProductPage),
  ],
  exports: [
    ProductPage
  ],
  providers: [Products,
  	WishlistService
  ]
})

export class ProductPageModule { }
