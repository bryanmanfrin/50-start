import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeService } from './services/youtube-service.service';
import { PresentationComponent } from './presentation-component/presentation.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ContentComponent} from './content/content.component';
import {VideoComponent} from './content/video/video.component';
import {GlobalConferencesListComponent} from './global-conferences-list/global-conferences-list.component';
import {AdvertisementPosterComponent} from './advertisment-poster/advertisement-poster.component';
import {ConferencePlayerComponent} from './content/conference-player/conference-player.component';
import {SafeEmbeddedYoutubeUrlPipe} from './pipes/safe-embedded-youtube-url.pipe';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { TitleComponent } from './title/title.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/authentication/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {TokenInterceptorService} from './services/interceptors/token-interceptor.service';
import { SafeEmbeddedChatUrlPipe } from './pipes/safe-embedded-chat-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    ContentComponent,
    VideoComponent,
    GlobalConferencesListComponent,
    AdvertisementPosterComponent,
    ConferencePlayerComponent,
    SafeEmbeddedYoutubeUrlPipe,
    CalendarComponent,
    LoginComponent,
    TitleComponent,
    RegisterComponent,
    SafeEmbeddedChatUrlPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    YoutubeService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
