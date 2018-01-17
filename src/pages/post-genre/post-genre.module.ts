import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostGenrePage } from './post-genre';

@NgModule({
  declarations: [
    PostGenrePage,
  ],
  imports: [
    IonicPageModule.forChild(PostGenrePage),
  ],
})
export class PostGenrePageModule {}
