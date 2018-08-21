import { TestBed, async, inject } from '@angular/core/testing';

import { NoDetailGuard } from './no-detail.guard';

describe('NoDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoDetailGuard]
    });
  });

  it('should ...', inject([NoDetailGuard], (guard: NoDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
