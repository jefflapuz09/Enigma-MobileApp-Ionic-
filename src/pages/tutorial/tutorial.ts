import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { ViewPostPage } from '../view-post/view-post';
/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  members:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  ngOnInit() 
  {
    this.getCategories();
  }

  getCategories()
  {
    this.postProvider.getTutorial().subscribe(
      data => {
          this.members = data;
          console.log(data);
      },
      err => {
          console.log(err);
      },
      () => console.log('Tutorial Search Complete')
  );
  }

  viewArticle(member)
  {
    this.navCtrl.push(ViewPostPage,{member:member});
  }

}
