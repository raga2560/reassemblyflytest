// Global state (used for theming)
import { AppState } from './app.global';

// Providers
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraProvider } from '../providers/util/camera.provider';
import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';
import { Auth } from '../providers/auth.passport';
// import { InsurelistService } from '../providers/insurelist.service';

import { WishlistService } from '../providers/wishlist-service';
import { Products } from '../providers/products';


// Ionic native providers
import { CardIO } from '@ionic-native/card-io';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';


// Directives
import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
import { Autosize } from '../components/autosize/autosize';

// Modules
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

export const MODULES = [
  SwingModule,
  BrowserModule,
  HttpModule,
  IonicStorageModule,
];

export const PROVIDERS = [
  AlertService,
  ToastService,
  AppState,
  CameraProvider,
  Auth,
//  InsurelistService,
  Products, 
  WishlistService,
  NativeGoogleMapsProvider,

  // Ionic native specific providers
  BarcodeScanner,
  Camera,
  Diagnostic,
  Geolocation,
  CardIO,
  StatusBar,
  SplashScreen,
  GoogleMaps,
  
 
];

export const DIRECTIVES = [
  SlidingDrawer,
  Autosize,
];
