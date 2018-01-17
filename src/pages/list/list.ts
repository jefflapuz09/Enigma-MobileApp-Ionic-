import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { CategoryProvider } from '../../providers/category/category';
import { PostGenrePage } from '../post-genre/post-genre';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  members: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoryProvider: CategoryProvider) {
  }

  ngOnInit() 
  {
    this.getCategories();
  }

  getCategories()
  {
    this.categoryProvider.getCategory().subscribe(
      data => {
          this.members = data;
          console.log(data);
      },
      err => {
          console.log(err);
      },
      () => console.log('Category Search Complete')
  );
  }

  viewPost(member)
  {
    this.navCtrl.push(PostGenrePage,{member:member.id});
  }
}
