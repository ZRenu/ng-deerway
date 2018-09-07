import { IndexModule } from './index.module';

describe('IndexModule', () => {
  let indexModule: IndexModule;

  beforeEach(() => {
    indexModule = new IndexModule();
  });

  it('should create an instance', () => {
    expect(indexModule).toBeTruthy();
  });
});
