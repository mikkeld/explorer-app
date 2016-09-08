/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BikesService } from './bikes.service';

describe('Service: Bikes', () => {
  beforeEach(() => {
    addProviders([BikesService]);
  });

  it('should ...',
    inject([BikesService],
      (service: BikesService) => {
        expect(service).toBeTruthy();
      }));
});
