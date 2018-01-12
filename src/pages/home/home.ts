import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { AdminProvider } from '../../providers/admin/admin';
import { CreateAdminPage } from '../create-admin/create-admin';
import { ViewAdminPage } from '../view-admin/view-admin';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: any;
  loader: any;
  constructor(public navCtrl: NavController, private adminProvider: AdminProvider, public loadingCtrl:LoadingController) {
    
  }

  ngOnInit() 
  {
    this.presentLoading();
    this.getAdmins();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.getAdmins();
      refresher.complete();
    }, 1000);
  }

  getAdmins()
  {
    this.adminProvider.getAdmin().subscribe(
      data => {
          this.members = data;
          console.log(data);
          this.loader.dismiss();
      },
      err => {
          console.log(err);
      },
      () => console.log('Admin Search Complete')
  );
  }

  createAdmin()
  {
    this.navCtrl.push(CreateAdminPage);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
        content: "Loading..."
    });
    this.loader.present();
	}
	
	viewAdmin(member)
	{
		this.navCtrl.push(ViewAdminPage,{member:member});
	}
	
}
