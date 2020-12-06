import { TestBed } from '@angular/core/testing';

import { ConfinementQuestionsService } from './confinement-questions.service';

describe('ConfinementQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfinementQuestionsService = TestBed.get(ConfinementQuestionsService);
    expect(service).toBeTruthy();
  });
});
