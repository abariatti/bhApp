import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }  from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { RegisterPage } from '../pages/register/register';
import { ScannerPage } from "../pages/scanner/scanner";
import { ClusterPage } from "../pages/cluster/cluster";
import { ClusterAddModalPage } from "../pages/cluster/cluster-add-modal";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ClusterService } from '../services/cluster.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';
import { ConfigService } from "../services/config.service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    DetailPage,
    RegisterPage,
    ScannerPage,
    ClusterPage,
    ClusterAddModalPage
  ],
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 300 }),
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    DetailPage,
    RegisterPage,
    ScannerPage,
    ClusterPage,
    ClusterAddModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    ClusterService,
    ConfigService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
