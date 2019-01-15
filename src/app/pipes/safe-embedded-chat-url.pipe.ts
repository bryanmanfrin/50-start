import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeEmbeddedChatUrl'
})
export class SafeEmbeddedChatUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(videoId: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/live_chat?v=' + videoId + '&embed_domain=localhost') ;
  }

}
