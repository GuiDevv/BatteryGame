import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'levels',
    loadChildren: () => import('./levels/levels.module').then( m => m.LevelsPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'level1',
    loadChildren: () => import('./level1/level1.module').then( m => m.Level1PageModule)
  },
  {
    path: 'level2',
    loadChildren: () => import('./level2/level2.module').then( m => m.Level2PageModule)
  },
  {
    path: 'level3',
    loadChildren: () => import('./level3/level3.module').then( m => m.Level3PageModule)
  },
  {
    path: 'level4',
    loadChildren: () => import('./level4/level4.module').then( m => m.Level4PageModule)
  },  {
    path: 'level6',
    loadChildren: () => import('./level6/level6.module').then( m => m.Level6PageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
