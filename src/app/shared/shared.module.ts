import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent
    ],
    imports: [
        RouterModule,
        MatToolbarModule,
        BrowserModule,
        CommonModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent
    ],
    providers: [BrowserModule],
    bootstrap: []
})
export class SharedModule { }
