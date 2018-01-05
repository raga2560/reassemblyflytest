import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs';
import { Auth } from '../providers/auth.passport';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  activePage = new Subject();
loggedinpages: Array<{ title: string, component: any, active: boolean, icon: string , logsOut?: boolean}>;
loggedoutpages: Array<{ title: string, component: any, active: boolean, icon: string, logsOut?: boolean }>;
  pages: Array<{ title: string, component: any, active: boolean, icon: string, logsOut?: boolean }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashscreen: SplashScreen,
    public global: AppState,
	public authService: Auth,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'alarm', active: false },
      { icon: 'analytics', active: false },
      { icon: 'archive', active: false },
      { icon: 'basket', active: false },
      { icon: 'body', active: false },
      { icon: 'bookmarks', active: false },
      { icon: 'camera', active: false },
      { icon: 'beer', active: false },
      { icon: 'power', active: false },
    ];

    this.pages = [
      { title: 'Home', component: 'HomePage', active: true, icon: 'home' },
	  { title: 'Profile', component: 'ProfileSettingsPage', active: false, icon: 'camera' },
	  { title: 'Login', component: 'LoginSliderPage', active: false, icon: 'archive' },
	  { title: 'Insurance', component: 'InsurancesPage', active: false, icon: 'contact' },
      { title: 'Status', component: 'StatusPage', active: false, icon: 'body' },
	        { title: 'Product', component: 'ProductPage', active: false, icon: 'body' },
			{ title: 'Wishlist', component: 'WishlistPage', active: false, icon: 'body' },
     
      { title: 'Logout',   component: 'HomePage', active: false, icon: 'ionic', logsOut: true },
	  { title: '!Terms', component: 'AccordionListPage', active: false, icon: 'map' },
      { title: '!DataEntry', component: 'IonicNativePage', active: false, icon: 'ionic' }, 
      
       { title: '!Submission', component: 'MiscellaneousListPage', active: false, icon: 'bookmarks' },
      { title: '!Offers of insurance', component: 'ModalWithNavigationPage', active: false, icon: 'book' },
      { title: '!PayTM', component: 'PopupFabPage', active: false, icon: 'map' },
      { title: '!AutosizingTextarea', component: 'AutosizingTextarea', active: false, icon: 'basket' },
      { title: '!Alert', component: 'AlertsPage', active: false, icon: 'beer' },
      
      { title: '!UploadImage', component: 'GetImagePage', active: false, icon: 'camera' },
	  { title: '!UploadPDF', component: 'GetImagePage', active: false, icon: 'camera' },
	  { title: '!CreditCard', component: 'CreditCardScanPage', active: false, icon: 'power' },
      // Removed for now as there were breaking changes in slides
      { title: '!BarcodeScan', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
	  { title: '!!EnrollScheme', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
	  { title: '!!List Opportunities', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
	  { title: '!!See Records->offer', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
      
      
    ];
	
	this.loggedinpages = [
      { title: 'Home', component: 'HomePage', active: true, icon: 'home' },
	  { title: 'Profile', component: 'ProfileSettingsPage', active: false, icon: 'camera' },
	  // { title: 'Login', component: 'LoginSliderPage', active: false, icon: 'archive' },
	  { title: 'Insurance', component: 'InsurancesPage', active: false, icon: 'contact' },
      { title: 'Status', component: 'StatusPage', active: false, icon: 'body' },
     
      { title: 'Logout',
        component: 'IonicOfficialComponentsPage', active: false, icon: 'ionic' },
	  { title: '!Terms', component: 'AccordionListPage', active: false, icon: 'map' },
      { title: '!DataEntry', component: 'IonicNativePage', active: false, icon: 'ionic' }, 
      
       { title: '!Submission', component: 'MiscellaneousListPage', active: false, icon: 'bookmarks' },
      { title: '!Offers of insurance', component: 'ModalWithNavigationPage', active: false, icon: 'book' },
      { title: '!PayTM', component: 'PopupFabPage', active: false, icon: 'map' },
      { title: '!AutosizingTextarea', component: 'AutosizingTextarea', active: false, icon: 'basket' },
      { title: '!Alert', component: 'AlertsPage', active: false, icon: 'beer' },
      
      { title: '!UploadImage', component: 'GetImagePage', active: false, icon: 'camera' },
	  { title: '!UploadPDF', component: 'GetImagePage', active: false, icon: 'camera' },
	  { title: '!CreditCard', component: 'CreditCardScanPage', active: false, icon: 'power' },
      // Removed for now as there were breaking changes in slides
      { title: '!BarcodeScan', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
	  { title: '!!EnrollScheme', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
	  { title: '!!List Opportunities', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
	  { title: '!!See Records->offer', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
      
      
    ];
	
	
	this.loggedoutpages = [
      { title: 'Home', component: 'HomePage', active: true, icon: 'home' },
	  { title: 'Profile', component: 'ProfileSettingsPage', active: false, icon: 'camera' },
	  { title: 'Login', component: 'LoginSliderPage', active: false, icon: 'archive' },
	  { title: 'Insurance', component: 'InsurancesPage', active: false, icon: 'contact' },
      { title: 'Status', component: 'StatusPage', active: false, icon: 'body' },
     
     // { title: 'Logout',         component: 'IonicOfficialComponentsPage', active: false, icon: 'ionic' },
	  { title: '!Terms', component: 'AccordionListPage', active: false, icon: 'map' },
      { title: '!DataEntry', component: 'IonicNativePage', active: false, icon: 'ionic' }, 
      
       { title: '!Submission', component: 'MiscellaneousListPage', active: false, icon: 'bookmarks' },
      { title: '!Offers of insurance', component: 'ModalWithNavigationPage', active: false, icon: 'book' },
      { title: '!PayTM', component: 'PopupFabPage', active: false, icon: 'map' },
      { title: '!AutosizingTextarea', component: 'AutosizingTextarea', active: false, icon: 'basket' },
      { title: '!Alert', component: 'AlertsPage', active: false, icon: 'beer' },
      
      { title: '!UploadImage', component: 'GetImagePage', active: false, icon: 'camera' },
	  { title: '!UploadPDF', component: 'GetImagePage', active: false, icon: 'camera' },
	  { title: '!CreditCard', component: 'CreditCardScanPage', active: false, icon: 'power' },
      // Removed for now as there were breaking changes in slides
      { title: '!BarcodeScan', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
	  { title: '!!EnrollScheme', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
	  { title: '!!List Opportunities', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
	  { title: '!!See Records->offer', component: 'BarcodeScannerPage', active: false, icon: 'calendar'}, 
      
      
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashscreen.hide();
      this.menuCtrl.enable(false, 'right');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
	if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.authService.logout();
    }
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}
