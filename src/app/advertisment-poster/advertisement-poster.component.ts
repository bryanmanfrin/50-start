import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Renderer2} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {has} from 'lodash';

@Component({
  selector: 'app-advertisment-poster',
  templateUrl: './advertisement-poster.component.html',
  styleUrls: ['./advertisement-poster.component.scss'],
})
export class AdvertisementPosterComponent {

  public title: string;
  public adv_title: string;
  public adv_content: string;

  contentMap = {
    '/home' : {'title' : 'Conférences', 'adv_title': '2Start', 'adv_content': 'Découvrez les conférences d\'entrepreneurs belges!' },
    '/presentation' : {'title' : 'Lancez-vous pour 50 cents!', 'adv_title': 'Qui sommes-nous?', 'adv_content': '' }
  };

  constructor(private renderer: Renderer2, private router: Router) {
    const urlKey = this.router.url.split('#')[0];
    if (has(this.contentMap, urlKey)) {
      this.title = this.contentMap[urlKey].title;
      this.adv_title = this.contentMap[urlKey].adv_title;
      this.adv_content = this.contentMap[urlKey].adv_content;
    }
  }
}
