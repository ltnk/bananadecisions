import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfinementQuestionsService } from './confinement-questions.service';

@Component({
  selector: 'app-confinement-question',
  templateUrl: './confinement-question.component.html',
  styleUrls: ['./confinement-question.component.scss'],
})
export class ConfinementQuestionComponent implements OnInit {
  questions = this.questionsService.questions;
  result: string;

  constructor(
    private navCtrl: NavController,
    private questionsService: ConfinementQuestionsService,
  ) {
  }

  ngOnInit() {
  }

  sendResult(index) {
    this.result = this.questions[index].response;
    this.questionsService.result = this.result;

  }

  goTo(myPath: string) {
    this.navCtrl.navigateForward(myPath);
  }



  goBack(myPath: string) {
    this.navCtrl.navigateBack(myPath);
  }
}