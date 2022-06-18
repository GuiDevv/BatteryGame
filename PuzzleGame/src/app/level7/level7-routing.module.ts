import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level7Page } from './level7.page';

const routes: Routes = [
  {
    path: '',
    component: Level7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level7PageRoutingModule {}
