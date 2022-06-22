import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { BatteryComponent } from '../battery/battery.component';
import { HomePageRoutingModule } from './home-routing.module';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, BatteryComponent],
  providers: [ScreenOrientation], 
})
export class HomePageModule {}
