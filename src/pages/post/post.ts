import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  members: any;
  id : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {
    this.id = navParams.get('member'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  ngOnInit() 
  {
    this.getPostAdmin(this.id);
  }

  getPostAdmin(id){
    this.postProvider.getPostAdmin(id).subscribe(
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
