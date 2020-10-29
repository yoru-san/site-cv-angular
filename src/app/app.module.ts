import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { ExperienceComponent } from './experience/experience.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CompetencesComponent } from './competences/competences.component';
import { MzdTimelineModule } from 'ngx-rend-timeline';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoisirsComponent,
    ExperienceComponent,
    PresentationComponent,
    CompetencesComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    MzdTimelineModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
