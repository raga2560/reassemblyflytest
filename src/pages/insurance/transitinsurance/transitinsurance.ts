import { Component, ViewChild } from '@angular/core';
import { CameraProvider } from '../../../providers/util/camera.provider';
import firebase from 'firebase';
import {NgZone} from '@angular/core';
import { Ng2UploaderModule } from 'ng2-uploader';

 

import {
  NavController,
  Platform,
  Slides,
  ActionSheetController,
  LoadingController,
  ToastController, 
  AlertController,
  IonicPage } from 'ionic-angular';
  
import {Transfer, TransferObject} from '@ionic-native/transfer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileUploader } from 'ng2-file-upload';
import { TradePanelPage } from '../tradepanel/tradepanel';
import { InsurelistService } from '../../../providers/insurelist.service';
import { Insurelist } from '../../../pages/transaction-shared/insurelist';


@IonicPage()
@Component({
  selector: 'page-transitinsurance',
  templateUrl: 'transitinsurance.html',
  
})
export class TransitInsurancePage {
  @ViewChild('slider') slider: Slides;
  ImageuploadFile : any;
  FileuploadFile :any;
  chosenPicture: any;
  captureDataUrl: string;
  
  
  imageURI:any;
  imageFileName:any;
  postId: number ;
  insureentry: Insurelist;
//native image download
  storageDirectory: string = '';
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
  
  
   
   public uploader:FileUploader = new FileUploader({
		url:'http://localhost:8081/fileupload',
		allowedFileType: ["pdf"],
		maxFileSize: 1*1024*1024,
	
   });

   public imageuploader:FileUploader = new FileUploader({
		url:'http://localhost:8081/imageupload',
		allowedFileType: ["image"],
		maxFileSize: 1*1024*1024,
	
   });
   
   /*
fileuploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  fileoptions: Object = {
    url:'http://localhost:8081/fileupload',
		allowedExtensions: ['pdf'],
		filterExtensions: true,
		
  };
  imageuploadFile: any;
 
  imageoptions: Object = {
    url:'http://localhost:8081/imageupload',
		allowedExtensions: ['jpg', 'png'],
		filterExtensions: true,
		
  };
  filesizeLimit = 2000000;
  imagesizeLimit = 2000000;
  */

  constructor(public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController,
	public alertCtrl: AlertController,
    public insurelistservice: InsurelistService,
    private filetransfer: FileTransfer,
    private transfer: Transfer, private file: File,
    public toastCtrl: ToastController
  
  ) {
	this.postId = 2;
    for (let i = 0; i < 20; i++) {
      this.slides.push(this.slides[i % 4]);
    }
	
	this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
       //overide the onCompleteItem property of the uploader so we are 
       //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
			//alert(JSON.stringify(response));
        };
   this.insureentry = new Insurelist();
  
  
   
  }

  ngAfterViewInit() {
    // this.slider.freeMode = true;
  }
  
		
  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }
  
  
  
  //------above code for taking picture  -------------- ----- //
  //------below code for uploading image to mongodb--- ----- //
  // https://www.npmjs.com/package/ng2-file-uploader


  	
 
  
  //------below code for uploading image to firebase--- ----- //
  
  
   
  uploadimagetofirebase() {
	
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
	
		this.insureentry.invoiceimage = snapshot.downloadURL;
		
		this.showSuccesfulUploadAlert();
    });

  }
   showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Picture is uploaded to Firebase',
      buttons: ['OK']
    });
    alert.present();

    // clear the previous photo data in the variable
   // this.captureDataUrl = "";
  }
  
  //------below code for uploadinginto firebase/mongodb ----- //
  
  UpdateInsureEntry() {
        var passingdata = {
		type:'simple',
		data : this.insureentry
        };	
	this.insurelistservice.createInsurelist(passingdata);
	
//	this.goToTradePanel();
	   
  }
  
  createInsureEntry() {
	
        var passingdata = {
		type:'simple',
		data : this.insureentry
        };	
	
    this.insurelistservice.createInsurelist(passingdata);
	
//	this.goToTradePanel();
	
    
	   
  }
  
}




