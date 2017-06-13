import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClusterPage } from './cluster';

@NgModule({
  declarations: [
    ClusterPage,
  ],
  imports: [
    IonicPageModule.forChild(ClusterPage),
  ],
  exports: [
    ClusterPage
  ]
})
export class ClusterPageModule {}
