// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { AlertController, App, LoadingController, NavController, Slides, IonicPage } from 'ionic-angular';
import { Auth } from '../../../providers/auth.passport';
//import { HomePage } from '../../home/home';

@IonicPage()
@Component({
  selector: 'page-login-slider',
  templateUrl: 'login-slider.html',
})
export class LoginSliderPage {
  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-6.jpg';

  email: string;
  role: string;
  password: string;
  loading: any;
	
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
	public navCtrl: NavController,
	public authService: Auth,
    public app: App
  ) {
	
		this.role = 'creator';
	  
	}

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 100
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }
/*
  login() {
    this.presentLoading('Thanks for signing up!');
    // this.navCtrl.push(HomePage);
  }

  signup() {
    this.presentLoading('Thanks for signing up!');
    // this.navCtrl.push(HomePage);
  } */
  
  signup(){

    this.showLoader();

  	let details = {
  	    email: this.email,
  	    password: this.password,
  	    role: this.role
  	};

  	this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
	  this.presentLoading('Thanks for signing up!');
	  this.navCtrl.push('HomePage'	);
      // this.navCtrl.setRoot(HomePage);
  	}, (err) => {
  		this.loading.dismiss();
  	});

  }

  
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }
  ionViewDidLoad() {

		this.showLoader();

		//Check if already authenticated
		this.authService.checkAuthentication().then((res) => {
			console.log("Already authorized");
			this.loading.dismiss();
			this.presentLoading('Already authorized');
			
			this.navCtrl.push('HomePage');
			// this.navCtrl.setRoot(HomePage);
		}, (err) => {
			console.log("Not already authorized");
			this.loading.dismiss();
		});

	}
	 login(){
 
    	this.showLoader();

        let credentials = {
            email: this.email,
            password: this.password
        };
 
        this.authService.login(credentials).then((result) => {
        	this.loading.dismiss();
            console.log(result);
			this.presentLoading('Thanks for signing up!');
			this.navCtrl.push('HomePage');
        	//this.navCtrl.setRoot(HomePage);
        }, (err) => {
        	this.loading.dismiss();
        	console.log(err);
        });
 
    }
 
   

    showLoader(){

		this.loading = this.loadingCtrl.create({
			content: 'Authenticating...'
		});

		this.loading.present();

    }
	
}
