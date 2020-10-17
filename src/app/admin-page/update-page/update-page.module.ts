import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePagePageRoutingModule } from './update-page-routing.module';

import { UpdatePage } from './update-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePagePageRoutingModule
  ],
  declarations: [UpdatePage]
})
export class UpdatePagePageModule {}
