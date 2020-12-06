import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { QuestionsService } from '../question/questions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(public navCtrl: NavController, public questionService: QuestionsService) {}

  ngOnInit() {}
  goBack(myPath: string) {
    this.navCtrl.navigateBack(myPath);
  }
}
