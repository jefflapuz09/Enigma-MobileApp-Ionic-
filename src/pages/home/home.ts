import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { AdminProvider } from '../../providers/admin/admin';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: any;
  constructor(public navCtrl: NavController, private adminProvider: AdminProvider) {
    
  }

  ngOnInit() 
  {
    this.getAdmins();
  }

  getAdmins()
  {
    this.adminProvider.getAdmin().subscribe(
      data => {
          this.members = data;
          console.log(data);
    
      },
      err => {
          console.log(err);
      },
      () => console.log('Admin Search Complete')
  );
  }

}
