import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confinement',
  templateUrl: './confinement.component.html',
  styleUrls: ['./confinement.component.scss'],
})
export class ConfinementComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() { }
  goTo(myPath: string) {
    this.navCtrl.navigateForward(myPath);
  }
}
