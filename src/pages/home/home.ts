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
  response:any;
  constructor(public navCtrl: NavController, private adminProvider: AdminProvider) {
    
  }

  ngOnInit() 
  {
    this.getAdmins();
  }

  getAdmins()
  {
    this.adminProvider.getAdmin().then(data => {
      console.log(JSON.parse(data));
    })
  }

}
