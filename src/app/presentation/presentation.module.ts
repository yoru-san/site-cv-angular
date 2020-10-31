import { NgModule } from '@angular/core';
import { PresentationComponent } from './presentation.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PresentationComponent],
    imports: [
        CommonModule,
        MatCheckboxModule
    ],
    providers: [],
    bootstrap: []
})
export class PresentationModule { }
