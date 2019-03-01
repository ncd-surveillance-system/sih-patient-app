import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { VerifyPage } from '../pages/verify/verify';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    SignupPage,
    VerifyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({apiKey: "AIzaSyBfbeUhDGFqYDTS889Y8RpVkXtXLWFH5iQ",
    authDomain: "ncd-surveillance-system.firebaseapp.com",
    databaseURL: "https://ncd-surveillance-system.firebaseio.com",
    projectId: "ncd-surveillance-system",
    storageBucket: "ncd-surveillance-system.appspot.com",
    messagingSenderId: "728125729015"}),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    SignupPage,
    VerifyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    File,
    FileChooser,
    FilePath,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
