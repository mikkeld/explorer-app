/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BikestandStatService } from './bikestand-stat.service';

describe('Service: BikestandStat', () => {
  beforeEach(() => {
    addProviders([BikestandStatService]);
  });

  it('should ...',
    inject([BikestandStatService],
      (service: BikestandStatService) => {
        expect(service).toBeTruthy();
      }));
});
