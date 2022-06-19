import { Injectable } from '@angular/core';
import { HINTS } from './Hints';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  currentLevel: number;
  hints = HINTS;
  currentHint;
  constructor() {
    this.currentLevel = 1;
    this.currentHint = this.hints[0]
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
}
