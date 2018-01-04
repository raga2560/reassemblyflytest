import { Component , ViewChild} from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-insurances',
  templateUrl: 'insurances.html'
})
export class InsurancesPage {
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
    this.rootPage = InsurancesPage;
    this.items = [
      // {
      //   title: 'Carousel',
      //   page: 'SlideCarouselPage'
      // },
      {
        title: 'Transit Insurance',
        page: 'TransitInsurancePage'
      },
      {
        title: 'Flight miss Insurance',
        page: 'SlideCustomPaginationPage'
      },
      {
        title: 'Trade Insurance',
        page: 'SlideFreeModePage'
      },
      {
        title: 'List of Sliders',
        page: 'SliderListPage'
      },
      {
        title: 'Nested slides',
        page: 'SlideNestedPage'
      },
      {
        title: 'Slide transitions',
        page: 'SlideTransitionsPage'
      },
      {
        title: 'Slide right to left',
        page: 'SlideRightToLeftPage'
      },
      {
        title: 'Slide with pagination arrows',
        page: 'SliderWithArrowsPage'
      },
      {
        title: 'Slide Walkthrough',
        page: 'SlideWalkthroughPage'
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
