import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {

  levelUnlocked1;
  levelUnlocked2;
  levelUnlocked3;
  levelUnlocked4;
  levelUnlocked5;
  levelUnlocked6;
  levelUnlocked7;
  levelUnlocked8;
  levelUnlocked9;

  constructor(private levelService:LevelService) { }

  ngOnInit() {
    this.getCompleted();
  }

  getCompleted(){
    this.levelUnlocked1 = this.levelService.getCompleted(0);
    this.levelUnlocked2 = this.levelService.getCompleted(1);
    this.levelUnlocked3 = this.levelService.getCompleted(2);
    this.levelUnlocked4 = this.levelService.getCompleted(3);
    this.levelUnlocked5 = this.levelService.getCompleted(4);
    this.levelUnlocked6 = this.levelService.getCompleted(5);
    this.levelUnlocked7 = this.levelService.getCompleted(6);
    this.levelUnlocked8 = this.levelService.getCompleted(7);
    this.levelUnlocked9 = this.levelService.getCompleted(8);
  }
}
