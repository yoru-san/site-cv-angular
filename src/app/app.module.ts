import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PresentationModule } from './presentation/presentation.module';
import { CompetenceModule } from './competences/competences.module';
import { LoisirsModule } from './loisirs/loisirs.module';
import { ExperienceModule } from './experience/experience.module';
import { CommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PresentationModule,
    CompetenceModule,
    LoisirsModule,
    ExperienceModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    PresentationModule,
    CompetenceModule,
    LoisirsModule,
    ExperienceModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
