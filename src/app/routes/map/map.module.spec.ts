import { MapModule } from './map.module';

describe('MapModule', () => {
  let mapModule: MapModule;

  beforeEach(() => {
    mapModule = new MapModule();
  });

  it('should create an instance', () => {
    expect(mapModule).toBeTruthy();
  });
});
