import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeService } from './services/youtube-service.service';
import { PresentationComponent } from './presentation-component/presentation.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HubComponent} from './home/hub/hub.component';
import {ContentComponent} from './home/hub/content/content.component';
import {VideoComponent} from './home/hub/content/video/video.component';
import {GlobalConferencesListComponent} from './home/hub/content/global-conferences-list/global-conferences-list.component';
import {AdvertismentPosterComponent} from './navbar/advertisment-poster/advertisment-poster.component';
import {VideoPlayerComponent} from './home/hub/content/video-player/video-player.component';
import {SafeEmbeddedYoutubeUrlPipe} from './pipes/safe-embedded-youtube-url.pipe';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    HubComponent,
    ContentComponent,
    VideoComponent,
    GlobalConferencesListComponent,
    AdvertismentPosterComponent,
    VideoPlayerComponent,
    SafeEmbeddedYoutubeUrlPipe,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
