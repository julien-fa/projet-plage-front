import { TestBed } from '@angular/core/testing';

import { SupprimerClientService } from './supprimer-locataire.service';

describe('SupprimerClientService', () => {
  let service: SupprimerClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupprimerClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
