import { NgModule } from '@angular/core';
import { LoisirComponent } from './loisir/loisir.component';
import { LoisirsComponent } from './loisirs.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoisirsComponent,
    LoisirComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class LoisirsModule { }
