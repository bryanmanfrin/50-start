import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-global-conferences-list',
  templateUrl: './global-conferences-list.component.html',
  styleUrls: ['./global-conferences-list.component.scss']
})
export class GlobalConferencesListComponent implements OnInit {

  public title = 'Conférences';
  videos = [];

  constructor(private ytService: YoutubeService, private router: Router) { }

  ngOnInit() {
    this.ytService.getVideos().subscribe((videos: any[]) => {
      this.videos = videos;
    });
  }

  selectConference(video: any) {
    this.router.navigate([ 'video/' + video.id]);
  }
}
