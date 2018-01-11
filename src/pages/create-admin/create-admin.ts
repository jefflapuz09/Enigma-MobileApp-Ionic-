import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { AdminProvider } from '../../providers/admin/admin';
/**
 * Generated class for the CreateAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-admin',
  templateUrl: 'create-admin.html',
})
export class CreateAdminPage {
  results: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private adminProvider: AdminProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAdminPage');
  }


  public Insert(penName: string, gender: Int32Array,description: string)
  {
     
      this.adminProvider.InsertMember(penName,gender,description).subscribe(
        data => {
          this.results = data;
          console.log(this.results);
            if(this.results.isSuccess ==1)
            {
                this.navCtrl.popTo(HomePage);
            }
        },
        err => {
          console.log(err);
        },
        () => console.log('Admin Search Complete')
    );

  }
}
