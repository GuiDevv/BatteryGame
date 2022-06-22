import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { ConfigPageRoutingModule } from './config-routing.module';

import { ConfigPage } from './config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigPageRoutingModule
  ],
  declarations: [ConfigPage],
  providers: [ScreenOrientation], 
})
export class ConfigPageModule {}
