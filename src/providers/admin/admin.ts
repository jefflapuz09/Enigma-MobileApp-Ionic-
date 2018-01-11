import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AdminProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AdminProvider Provider');
  }



  getAdmin()
  {
    var url = 'http://localhost/enimaBackend/viewAdmin.php';
    var response = this.http.get(url);
    
    return response;
  }

}
