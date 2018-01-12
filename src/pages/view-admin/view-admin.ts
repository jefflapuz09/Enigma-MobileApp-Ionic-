import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-admin',
  templateUrl: 'view-admin.html',
})
export class ViewAdminPage {
 admin;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.admin = navParams.data.member;
  }

  ionViewDidLoad() {
	 
    console.log('ionViewDidLoad ViewAdminPage');
  }

}
