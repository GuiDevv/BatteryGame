import { Component } from '@angular/core';
import { LevelService } from '../level.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private levelService:LevelService, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.onChange().subscribe(
      () => {
          this.OnScreenRotated();
      }
   );
  }

  Size = "width: 70vw";
  Next = "width: 5vh";
  Play = "width: 8vh";

  ngOnInit() {
    this.OnScreenRotated();
  }

  getCurrentScreenOrientation(){
    return this.screenOrientation.type;
  }

  OnScreenRotated(){
    if (this.getCurrentScreenOrientation() == "portrait-primary"){
      this.Size =  "width: 70vw";
      this.Next = "width: 5vh";
      this.Play = "width: 8vh";
    }
    else{
      this.Size =  "width: 70vh";
      this.Next = "width: 5vw";
      this.Play = "width: 8vw";
    }

  }
}
