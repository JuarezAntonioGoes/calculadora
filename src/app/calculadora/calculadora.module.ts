import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora';
import { CalculadoraService } from './service';

@NgModule({
  declarations: [CalculadoraComponent],
  providers: [CalculadoraService],
  imports: [CommonModule],
  exports: [CalculadoraComponent],
})
export class CalculadoraModule {}
