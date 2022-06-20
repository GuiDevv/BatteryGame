import { Injectable } from '@angular/core';
import { HINTS } from './Hints';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  currentLevel: number;
  hints = HINTS;
  currentHint;
  levelCompleted: boolean[];

  constructor() {
    this.currentLevel = 1;
    this.currentHint = this.hints[0];

    this.levelCompleted = [true,false,false,false,false,false,false,false,false];
  }

  setCurrentHint(level){
    this.currentHint = this.hints[level - 1];
  }

  getCurrentHint(){
    return this.currentHint;
  }

  getCurrentLevel(){
    return this.currentLevel;
  }

  setCurrentLevel(level){
    this.currentLevel = level;
    this.setCurrentHint(level);
  }

  getCompleted(level){
    return this.levelCompleted[level];
  }
}
