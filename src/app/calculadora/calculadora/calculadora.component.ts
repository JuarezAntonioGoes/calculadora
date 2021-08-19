import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private num1 = '';
  private num2 = '';
  private operador = '';

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.resetarCampos();
  }

  resetarCampos(): void {
    this.num1 = '';
    this.num2 = '';
    this.operador = '';
  }

  inserirPonto(): void {
    if (this.operador !== '') {
      if (this.num2 === '') {
        this.num2 = '0.';
      }

      if (this.num2.indexOf('.') === -1) {
        this.num2 += '.';
      }

      return;
    }

    if (this.num1 === '') {
      this.num1 = '0.';
    }

    if (this.num1.indexOf('.') === -1) {
      this.num1 += '.';
    }
  }

  concatenarNumeros(num: string): void {
    if (num === '.') {
      this.inserirPonto();
      return;
    }

    if (this.operador !== '') {
      if (this.num2 === '0') {
        this.num2 = num;

        return;
      }

      this.num2 += num;
      return;
    }

    if (this.num1 === '0') {
      this.num1 = num;

      return;
    }

    this.num1 += num;
  }

  realizarOperacao(): void {
    if (this.num1 === '' && this.num2 === '' && this.operador === '') {
      return;
    }

    const result = this.calculadoraService.realizarOperacao(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operador
    );

    this.resetarCampos();
    this.num1 = result.toString();
  }

  setOperador(operador: string): void {
    if (this.num1 !== '' && this.num2 !== '') {
      this.realizarOperacao();
      this.operador = operador;
    }

    if (this.num1 !== '') {
      this.operador = operador;
    }
  }

  getDisplay(): string {
    let output = '0';

    if (this.num1 !== '') {
      output = this.num1;
    }

    if (this.operador !== '') {
      output += ' ' + this.operador;
    }

    if (this.num2 !== '') {
      output += ' ' + this.num2;
    }

    return output;
  }
}
