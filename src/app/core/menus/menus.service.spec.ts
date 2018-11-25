import { TestBed, inject } from '@angular/core/testing';

import { MenusService } from './menus.service';

describe('MenusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenusService]
    });
  });

  it('should be created', inject([MenusService], (service: MenusService) => {
    expect(service).toBeTruthy();
  }));
});
