import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
/**
 * Generated class for the FaqsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs.html',
})
export class FaqsPage {
members:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqsPage');
  }

  ngOnInit() 
  {
    this.getCategories();
  }

  getCategories()
  {
    this.postProvider.getFaqs().subscribe(
      data => {
          this.members = data;
          console.log(data);
      },
      err => {
          console.log(err);
      },
      () => console.log('Faqs Search Complete')
  );
  }
}
