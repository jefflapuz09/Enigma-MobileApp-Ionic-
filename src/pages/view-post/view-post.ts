import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-post',
  templateUrl: 'view-post.html',
})
export class ViewPostPage {
post;
imageExample;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.data.member;
    this.imageExample = "https:\/\/stationpfe.000webhostapp.com\/projet\/uploads\/1494201248244.jpg";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPostPage');
    console.log(this.post);
  }

}
