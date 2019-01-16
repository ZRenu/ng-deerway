import { ExperimentModule } from './experiment.module';

describe('ExperimentModule', () => {
  let experimentModule: ExperimentModule;

  beforeEach(() => {
    experimentModule = new ExperimentModule();
  });

  it('should create an instance', () => {
    expect(experimentModule).toBeTruthy();
  });
});
