import { SafeEmbeddedChatUrlPipe } from './safe-embedded-chat-url.pipe';

describe('SafeEmbeddedChatUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeEmbeddedChatUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
