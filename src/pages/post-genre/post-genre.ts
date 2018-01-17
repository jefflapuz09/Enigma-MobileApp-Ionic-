import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { ViewPostPage } from '../view-post/view-post';  
/**
 * Generated class for the PostGenrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-genre',
  templateUrl: 'post-genre.html',
})
export class PostGenrePage {

  members: any;
  id : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {
    this.id = navParams.get('member'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostGenrePage');
  }

  ngOnInit() 
  {
    this.getPostGenre(this.id);
  }

  getPostGenre(id){
    this.postProvider.getViewArticle(id).subscribe(
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

  viewArticle(member)
  {
    this.navCtrl.push(ViewPostPage,{member:member});
  }
}
