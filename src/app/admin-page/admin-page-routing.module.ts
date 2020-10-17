import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPagePage } from './admin-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPagePage
  },
  {
    path: 'create-page',
    loadChildren: () => import('./create-page/create-page.module').then( m => m.CreatePagePageModule)
  },
  {
    path: 'objectID',
    loadChildren: () => import('./update-page/update-page.module').then( m => m.UpdatePagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPagePageRoutingModule {}
