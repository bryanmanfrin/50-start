import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient) {
  }

  getVideos(): Observable<any[]> {
    return this.http.get<any[]>('https://node-api-2start.herokuapp.com/listVids').pipe(
      map((results: any[]) => results.concat(results.concat(results))),
    );
  }

  getVideoById(videoId: string) {
    return this.http.get<any[]>('https://node-api-2start.herokuapp.com/video/' + videoId);
  }
}
