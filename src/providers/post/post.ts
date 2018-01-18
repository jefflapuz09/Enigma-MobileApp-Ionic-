import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }

  getPostAdmin(adminId)
  {

      var url = 'https://backendtesting.000webhostapp.com/postResp/'+adminId;
      var response = this.http.get(url);

    return response;
  }

  getViewArticle(postId)
  {

      var url = 'https://backendtesting.000webhostapp.com/postGenre/'+postId;
      var response = this.http.get(url);

    return response;
  }

  getTutorial()
  {

      var url = 'https://backendtesting.000webhostapp.com/postTuts';
      var response = this.http.get(url);

    return response;
  }

  getFaqs()
  {
    var url = 'https://backendtesting.000webhostapp.com/postFaqs';
    var response = this.http.get(url);

  return response;
  }
}
