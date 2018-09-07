import { ScreenModule } from './screen.module';

describe('ScreenModule', () => {
  let screenModule: ScreenModule;

  beforeEach(() => {
    screenModule = new ScreenModule();
  });

  it('should create an instance', () => {
    expect(screenModule).toBeTruthy();
  });
});
