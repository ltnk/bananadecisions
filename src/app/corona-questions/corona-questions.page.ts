import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-corona-questions',
  templateUrl: './corona-questions.page.html',
  styleUrls: ['./corona-questions.page.scss'],
})
export class CoronaQuestionsPage {

  constructor(public navCtrl: NavController) { }

  goTo(myPath: string) {
    this.navCtrl.navigateForward(myPath);
  }

}
