import { TestBed } from '@angular/core/testing';

import { DraftMessageServiceService } from './draft-message-service.service';

describe('DraftMessageServiceService', () => {
  let service: DraftMessageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftMessageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
