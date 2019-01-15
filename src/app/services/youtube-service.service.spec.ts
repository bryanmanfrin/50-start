import { TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtube-service.service';

describe('YoutubeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeService = TestBed.get(YoutubeService);
    expect(service).toBeTruthy();
  });
});
