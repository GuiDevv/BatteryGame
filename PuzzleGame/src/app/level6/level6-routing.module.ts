import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level6Page } from './level6.page';

const routes: Routes = [
  {
    path: '',
    component: Level6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level6PageRoutingModule {}
