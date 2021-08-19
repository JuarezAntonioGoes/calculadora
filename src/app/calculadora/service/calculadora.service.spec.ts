import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('2 + 3 deve ser igual a 5', () => {
    const resultado = service.realizarOperacao(2, 3, CalculadoraService.SOMA);
    expect(resultado).toEqual(5);
  });

  it('2 - 3 deve ser igual a -1', () => {
    const resultado = service.realizarOperacao(2, 3, CalculadoraService.SUBTRACAO);
    expect(resultado).toEqual(-1);
  });

  it('2 x 3 deve ser igual a 6', () => {
    const resultado = service.realizarOperacao(2, 3, CalculadoraService.MULTIPLICACAO);
    expect(resultado).toEqual(6);
  });

  it('6 / 3 deve ser igual a 2', () => {
    const resultado = service.realizarOperacao(6, 3, CalculadoraService.DIVISAO);
    expect(resultado).toEqual(2);
  });
});
