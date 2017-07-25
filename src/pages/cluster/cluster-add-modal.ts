import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { ClusterService } from "../../services/cluster.service";
import { Cluster } from "../../models/cluster";

@Component({
  templateUrl: './cluster-add-modal.html'
})
export class ClusterAddModalPage {
  character;
  form: FormGroup;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    private clusterService: ClusterService,
  ) {
      this.form = formBuilder.group({
        clusterName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
  }

  add(){
    //console.log(this.form.value.clusterName);
    let cl:Cluster = {
      id:0,
      name:this.form.value.clusterName,
      users: [1]
    }
    this.clusterService.create(cl)
      .then(cluster => this.viewCtrl.dismiss(cluster));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}