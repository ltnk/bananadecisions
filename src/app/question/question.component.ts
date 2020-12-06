import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import {
  NavController,
} from '@ionic/angular';
import { ResultService } from '../result/result.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questions = this.questionsService.questions;
  randomNumber: number;
  results = this.resultService.results;
  result;

  constructor(
    private navCtrl: NavController,
    private questionsService: QuestionsService,
    private resultService: ResultService,
  ) { }

  ngOnInit() { }

  getRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * Math.floor(20));
    this.resultService.result = this.results[this.randomNumber];
  }

  goTo(myPath: string) {
    this.navCtrl.navigateForward(myPath);
  }

  goBack(myPath: string) {
    this.navCtrl.navigateBack(myPath);
  }
}
