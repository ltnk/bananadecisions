import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoronaQuestionsPage } from './corona-questions.page';
import { ConfinementQuestionComponent } from '../confinement-question/confinement-question.component';

const routes: Routes = [
  {
    path: '',
    component: CoronaQuestionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoronaQuestionsPage, ConfinementQuestionComponent],
  entryComponents: [ConfinementQuestionComponent],
})
export class CoronaQuestionsPageModule { }
