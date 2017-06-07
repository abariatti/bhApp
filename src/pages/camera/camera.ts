import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions } from "@ionic-native/camera-preview";

/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private cameraPreview: CameraPreview) { }


  startCamera() {
    // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });
  }

  takePicture(){

    // let size = {maxWidth: 1024, maxHeight: 640};
    // CameraPreview.takePicture(size);         //Decrepted
      this.cameraPreview.takePicture(function(imgData){
        (<HTMLInputElement>document.getElementById('previewPicture')).src = 'data:image/jpeg;base64,' + imgData;
      });
  }

  stopCamera(){
    // Stop the camera preview
    this.cameraPreview.stopCamera();
  }

  switchCamera(){
    this.cameraPreview.switchCamera();
  }



}
