import { ListModule } from './list.module';

describe('ListModule', () => {
  let listModule: ListModule;

  beforeEach(() => {
    listModule = new ListModule();
  });

  it('should create an instance', () => {
    expect(listModule).toBeTruthy();
  });
});
