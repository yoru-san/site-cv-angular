import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { PresentationModule } from './presentation/presentation.module';
import { CompetenceModule } from './competences/competences.module';
import { LoisirsModule } from './loisirs/loisirs.module';
import { ExperienceModule } from './experience/experience.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    PresentationModule,
    CompetenceModule,
    LoisirsModule,
    ExperienceModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [
    PresentationModule,
    CompetenceModule,
    LoisirsModule,
    ExperienceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
