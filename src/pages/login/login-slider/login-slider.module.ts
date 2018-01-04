import { LoginSliderPage } from './login-slider';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Auth } from '../../../providers/auth.passport';
// import { IonicStorageModule } from '@ionic/storage';
//import { HomePage } from '../../home/home';


@NgModule({
  declarations: [
    LoginSliderPage,
//	HomePage,
  ],
  imports: [
    //IonicStorageModule,
    IonicPageModule.forChild(LoginSliderPage),
  ],
  exports: [
    LoginSliderPage
  ],
  entryComponents:[
//  HomePage
  ],
  providers: [Auth]
})

export class LoginSliderPageModule { }
