import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfinementQuestionsService } from '../confinement-question/confinement-questions.service';

@Component({
  selector: 'app-corona-result',
  templateUrl: './corona-result.page.html',
  styleUrls: ['./corona-result.page.scss'],
})
export class CoronaResultPage {

  questions = this.questionsService.questions;
  result: string;

  constructor(
    private navCtrl: NavController,
    private questionsService: ConfinementQuestionsService,
  ) {

  }

  ngOnInit() {
    this.result = this.questionsService.getResult();

  }

  goTo(myPath: string) {
    console.log(this);
    this.navCtrl.navigateForward(myPath);
  }

  goBack(myPath: string) {
    this.navCtrl.navigateBack(myPath);
  }
}
