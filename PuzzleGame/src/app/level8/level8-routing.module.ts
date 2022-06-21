import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level8Page } from './level8.page';

const routes: Routes = [
  {
    path: '',
    component: Level8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level8PageRoutingModule {}
