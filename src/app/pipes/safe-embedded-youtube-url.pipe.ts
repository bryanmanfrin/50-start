import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeEmbeddedYoutubeUrlPipe'
})
export class SafeEmbeddedYoutubeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(videoId: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl('http://youtube.com/embed/' + videoId + '?rel=0&modestbranding=1&showinfo=0') ;
  }

}
