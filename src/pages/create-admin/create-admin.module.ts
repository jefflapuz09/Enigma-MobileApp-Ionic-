import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAdminPage } from './create-admin';

@NgModule({
  declarations: [
    CreateAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAdminPage),
  ],
})
export class CreateAdminPageModule {}
