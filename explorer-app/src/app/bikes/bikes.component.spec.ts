/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BikesComponent } from './bikes.component';

describe('Component: Bikes', () => {
  it('should create an instance', () => {
    let component = new BikesComponent();
    expect(component).toBeTruthy();
  });
});
