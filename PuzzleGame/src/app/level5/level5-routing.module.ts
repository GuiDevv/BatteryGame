import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level5Page } from './level5.page';

const routes: Routes = [
  {
    path: '',
    component: Level5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level5PageRoutingModule {}
