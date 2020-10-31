import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PresentationModule } from './presentation/presentation.module';
import { CompetenceModule } from './competences/competences.module';
import { LoisirsModule } from './loisirs/loisirs.module';
import { ExperienceModule } from './experience/experience.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PresentationModule,
    CompetenceModule,
    LoisirsModule,
    ExperienceModule,
    SharedModule
  ],
  providers: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
