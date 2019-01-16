import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {YoutubeService} from '../../services/youtube-service.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './conference-player.component.html',
  styleUrls: ['./conference-player.component.scss']
})
export class ConferencePlayerComponent implements OnInit {

  public conferenceId: string;
  public conference: any;
  @Output() removeCurrentlySelectedConferenceEmitter = new EventEmitter<any>();

  constructor(private elem: ElementRef, private route: ActivatedRoute, private ytService: YoutubeService) {
    this.conferenceId = this.route.snapshot.paramMap.get('id');
    this.ytService.getVideoById(this.conferenceId).subscribe((video) => this.conference = video);
  }

  ngOnInit() {
  }

  backToList() {
    this.removeCurrentlySelectedConferenceEmitter.emit();
  }
}
