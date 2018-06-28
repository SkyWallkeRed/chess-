import { TestBed, inject } from '@angular/core/testing';

import { GameSocketService } from './game-socket.service';

describe('GameSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameSocketService]
    });
  });

  it('should be created', inject([GameSocketService], (service: GameSocketService) => {
    expect(service).toBeTruthy();
  }));
});
