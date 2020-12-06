import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { QuestionComponent } from '../question/question.component';
import { ConfinementComponent } from '../confinement/confinement.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
  ],
  declarations: [HomePage, QuestionComponent, ConfinementComponent],
  entryComponents: [QuestionComponent, ConfinementComponent],
})
export class HomePageModule { }
