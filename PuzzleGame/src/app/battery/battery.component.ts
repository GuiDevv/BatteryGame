import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss'],
})
export class BatteryComponent implements OnInit {

  constructor() { }

  Image:String = "../../assets/icon/BatteryNewIcon.png";
  Charge:String = "../../assets/icon/Charge0Icon.png";
  @Input() Size:String;
  @Input() UseBatteryOpacity:Boolean;
  @Input() UseChargeOpacity:Boolean;
  Opacity:String = "opacity: 1";
  ChargeOpacity:String = "opacity: 1";

  ngOnInit() {
    if (this.UseBatteryOpacity){
        this.Opacity = "opacity: 0";
    }
    if (this.UseChargeOpacity){
      this.ChargeOpacity = "opacity: 0";
  }
  }

  UpdateBattery(charge:number){
    console.log(charge);
    if (this.UseBatteryOpacity){
        this.Opacity = "opacity: " + charge / 9;
    }      

    if (this.UseChargeOpacity){
      this.ChargeOpacity = "opacity: " + charge / 9;
  } 

    if (charge <= 9){
        this.Charge = "../../assets/icon/Charge" + charge + "Icon.png";
    }
      
  }
}
