import { TestBed } from '@angular/core/testing';

import { MessageToastService } from './message.service';

describe('MessageService', () => {
  let service: MessageToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
