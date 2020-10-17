import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectDetailsPageRoutingModule } from './object-details-routing.module';

import { ObjectDetailsPage } from './object-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectDetailsPageRoutingModule
  ],
  declarations: [ObjectDetailsPage]
})
export class ObjectDetailsPageModule {}
