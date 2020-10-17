import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectDetailsPage } from './object-details.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectDetailsPageRoutingModule {}
