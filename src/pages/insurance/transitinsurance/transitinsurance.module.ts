import { TransitInsurancePage } from './transitinsurance';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsurelistService } from '../../../providers/insurelist.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { Camera } from '@ionic-native/camera';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import {HttpModule} from '@angular/http';
import { Ng2UploaderModule } from 'ng2-uploader';


@NgModule({
  declarations: [
    TransitInsurancePage,
	FileSelectDirective,
	FileDropDirective,
	
  ],
  imports: [
  HttpModule,
  Ng2UploaderModule,
    IonicPageModule.forChild(TransitInsurancePage),
  ],
  exports: [
    TransitInsurancePage
  ],
  providers: [InsurelistService,
  	FileTransfer,
	Transfer,
    File
  ]
})

export class TransitInsurancePageModule { }
