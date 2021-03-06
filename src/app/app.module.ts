import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreateAdminPage } from '../pages/create-admin/create-admin';
import { ViewAdminPage } from '../pages/view-admin/view-admin';
import { PostPage } from '../pages/post/post';
import { ViewPostPage } from '../pages/view-post/view-post';
import { PostGenrePage } from '../pages/post-genre/post-genre';
import { AboutPage } from '../pages/about/about';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ViewtutorialPage } from '../pages/viewtutorial/viewtutorial';
import { FaqsPage } from '../pages/faqs/faqs';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdminProvider } from '../providers/admin/admin';
import { CategoryProvider } from '../providers/category/category';
import { PostProvider } from '../providers/post/post';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CreateAdminPage,
    ViewAdminPage,
    PostPage,
    ViewPostPage,
    PostGenrePage,
    AboutPage,
    TutorialPage,
    ViewtutorialPage,
    FaqsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CreateAdminPage,
    ViewAdminPage,
    PostPage,
    ViewPostPage,
    PostGenrePage,
    AboutPage,
    TutorialPage,
    ViewtutorialPage,
    FaqsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdminProvider,
    CategoryProvider,
    PostProvider
  ]
})

export class AppModule {}
