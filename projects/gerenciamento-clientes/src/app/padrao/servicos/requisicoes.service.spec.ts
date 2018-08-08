import { TestBed, inject } from '@angular/core/testing';

import { RequisicoesService } from './requisicoes.service';

describe('RequisicoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequisicoesService]
    });
  });

  it('should be created', inject([RequisicoesService], (service: RequisicoesService) => {
    expect(service).toBeTruthy();
  }));
});
