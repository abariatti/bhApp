import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ClusterService } from "../../services/cluster.service";
import { Cluster } from "../../models/cluster";
import { ClusterAddModalPage } from "./cluster-add-modal";
import { ConfigService } from "../../services/config.service";

/**
 * Generated class for the ClusterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cluster',
  templateUrl: 'cluster.html',
})
export class ClusterPage {
  userId: number;
  clusters: Cluster[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private configService: ConfigService,
              private clusterService: ClusterService,
              public modalCtrl: ModalController) {
    
    this.userId = configService.UserId;

    clusterService.getClusters()
      .then(clusters => this.clusters = clusters
        .filter(c => c.users.find(u=>u == this.userId)));
  }


  openModal(params) {
    let modal = this.modalCtrl.create(ClusterAddModalPage, params);
    modal.onDidDismiss(data => {
      if(data){
        this.clusters.push(data); 
      }      
    })
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClusterPage');
  }
}
