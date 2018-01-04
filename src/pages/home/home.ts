import { Component , ViewChild} from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('slider') slider: Slides;
  rootPage: any;
  items: Array<{ title: string, page: any }>;
  //slider: Slides;
  

 slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/img/lists/wishlist-1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/img/lists/wishlist-2.jpg',
      songs: 4,
      private: false
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/img/lists/wishlist-3.jpg',
      songs: 5,
      private: true
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/img/lists/wishlist-4.jpg',
      songs: 12,
      private: true
    }
  ];
  

  constructor(public navCtrl: NavController) {
    this.rootPage = HomePage;
    this.items = [
      // {
      //   title: 'Carousel',
      //   page: 'SlideCarouselPage'
      // },
      
      {
        title: 'Login',
        page: 'LoginSliderPage'
      },
	  {
        title: 'Insurances',
        page: 'InsurancesPage'
      },
      {
        title: 'Status',
        page: 'StatusPage'
      }
      // {
      //   title: 'Photo Gallery (not working)',
      //   page: 'SlidePhotoGalleryPage'
      // },
    ];
	 /*for (let i = 0; i < 20; i++) {
      this.slides.push(this.slides[i % 4]);
    } */
  }

   onSlideChanged() {
    const currentIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', currentIndex);
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
