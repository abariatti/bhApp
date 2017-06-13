import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ScannerPage } from '../scanner/scanner';
import { ClusterPage } from "../cluster/cluster";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ClusterPage;
  tab4Root = RegisterPage;
  tab5Root = ScannerPage;
  
  constructor() {

  }
}