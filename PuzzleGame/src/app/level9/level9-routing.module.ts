import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level9Page } from './level9.page';

const routes: Routes = [
  {
    path: '',
    component: Level9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level9PageRoutingModule {}
