import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContentComponent} from './content/content.component';
import {GlobalConferencesListComponent} from './global-conferences-list/global-conferences-list.component';
import {ConferencePlayerComponent} from './content/conference-player/conference-player.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
   {
     path: '', redirectTo: 'home', pathMatch: 'full'
   },
   { path: 'home', component: ContentComponent },
   { path: 'video/:id', component: ConferencePlayerComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
