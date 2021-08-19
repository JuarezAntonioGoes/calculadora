import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  static readonly SOMA = '+';
  static readonly SUBTRACAO = '-';
  static readonly DIVISAO = '/';
  static readonly MULTIPLICACAO = '*';

  constructor() {}

  realizarOperacao(val1: number, val2: number, operacao: string): number {
    let resultado = 0;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = val1 + val2;
        break;

      case CalculadoraService.SUBTRACAO:
        resultado = val1 - val2;
        break;

      case CalculadoraService.DIVISAO:
        resultado = val1 / val2;
        break;

      case CalculadoraService.MULTIPLICACAO:
        resultado = val1 * val2;
        break;

      default:
        resultado = 0;
    }

    return resultado;
  }
}
