import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencesComponent } from './competences/competences.component';
import { ExperienceComponent } from './experience/experience.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'loisirs', component: LoisirsComponent},
  { path: '**', component: PresentationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
