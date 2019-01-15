import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient) {
  }

  getVideos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3127/listVids').pipe(
      map((results: any[]) => results.concat(results.concat(results))),
    );
  }

  getVideoById(videoId: string) {
    return this.http.get<any[]>('http://localhost:3127/video/' + videoId);
  }
}
