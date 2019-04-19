import { OutsideModule } from './outside.module';

describe('OutsideModule', () => {
  let outsideModule: OutsideModule;

  beforeEach(() => {
    outsideModule = new OutsideModule();
  });

  it('should create an instance', () => {
    expect(outsideModule).toBeTruthy();
  });
});
