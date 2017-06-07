import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams/*, private barcodeScanner: BarcodeScanner */) { 
  }

  scan() {
    /*this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
    }, (err) => {
      // An error occurred
      console.log(err);
    });*/
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannerPage');
  }

}
