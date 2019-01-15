import { SafeEmbeddedYoutubeUrlPipe } from './safe-embedded-youtube-url.pipe';

describe('SafeEmbeddedYoutubeUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeEmbeddedYoutubeUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
