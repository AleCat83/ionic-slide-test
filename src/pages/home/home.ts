import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {}

  onSlideDidChange() {
    switch (this.slides.getActiveIndex()) {
      case 0:
        this.slides.lockSwipeToPrev(true);
        break;
      case 1:
        this.slides.lockSwipes(false);
        break;
      case 2:
        this.slides.lockSwipeToNext(true);
        break;
    }
  }

}
