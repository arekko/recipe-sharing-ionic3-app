import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HomePage } from "../pages/home/home";
import { MediaProvider } from "../providers/media/media";
import { BookmarksPage } from "./../pages/bookmarks/bookmarks";
import { FrontPage } from "./../pages/front/front";
import { LoginPage } from "./../pages/login/login";
import { ProfilePage } from "./../pages/profile/profile";
import { TabsPage } from "./../pages/tabs/tabs";
import { UploadPage } from "./../pages/upload/upload";
import { MyApp } from "./app.component";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FrontPage,
    LoginPage,
    TabsPage,
    ProfilePage,
    UploadPage,
    BookmarksPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FrontPage,
    LoginPage,
    TabsPage,
    ProfilePage,
    UploadPage,
    BookmarksPage
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MediaProvider
  ]
})
export class AppModule {}
