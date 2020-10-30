import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
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
        MatToolbarModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent
    ],
    providers: [],
    bootstrap: []
})
export class CommonModule { }
