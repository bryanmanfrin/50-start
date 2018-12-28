import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HubComponent } from './home/hub/hub.component';
import {PresentationComponent} from './presentation-component/presentation.component';
import {CalendarComponent} from './calendar/calendar.component';

const routes: Routes = [
  { path: '', component: HubComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
