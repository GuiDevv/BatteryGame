import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HintPageRoutingModule } from './hint-routing.module';
import { HintPage } from './hint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HintPageRoutingModule
  ],
  declarations: [HintPage]
})
export class HintPageModule {}
