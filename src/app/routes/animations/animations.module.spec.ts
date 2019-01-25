import { AnimationsModule } from './animations.module';

describe('AnimationsModule', () => {
  let animationsModule: AnimationsModule;

  beforeEach(() => {
    animationsModule = new AnimationsModule();
  });

  it('should create an instance', () => {
    expect(animationsModule).toBeTruthy();
  });
});
