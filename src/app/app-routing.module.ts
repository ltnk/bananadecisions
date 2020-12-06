import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  {
    path: 'credits',
    loadChildren: './credits/credits.module#CreditsPageModule',
  },
  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomePageModule',
  },
  { path: 'corona-questions', loadChildren: './corona-questions/corona-questions.module#CoronaQuestionsPageModule' },
  { path: 'corona-result', loadChildren: './corona-result/corona-result.module#CoronaResultPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
