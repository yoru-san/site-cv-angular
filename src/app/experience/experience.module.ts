import { NgModule } from '@angular/core';
import { MzdTimelineModule } from 'ngx-rend-timeline';
import { ExperienceComponent } from './experience.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
    declarations: [
        ExperienceComponent,
        TimelineComponent
    ],
    imports: [
        MzdTimelineModule
    ],
    providers: [],
    bootstrap: []
})
export class ExperienceModule { }
