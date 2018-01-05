import { Component , ViewChild} from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';

import { WishlistService } from '../../../providers/wishlist-service'

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {

  constructor(public navCtrl: NavController, public wishlistService: WishlistService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  deleteFromWishlist(product){
  	this.wishlistService.deleteProduct(product);
  }

}
