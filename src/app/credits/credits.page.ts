import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
})
export class CreditsPage {
  constructor(public navCtrl: NavController) {}

  goBack(myPath: string) {
    this.navCtrl.navigateBack(myPath);
  }
}
