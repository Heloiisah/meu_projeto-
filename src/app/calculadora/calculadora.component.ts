import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  somar() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }

  subtrair() {
    this.resultado = Number(this.numero1) - Number(this.numero2);
  }

  multiplicar() {
    this.resultado = Number(this.numero1) * Number(this.numero2);
  }

  dividir() {
    if (Number(this.numero2) !== 0) {
      this.resultado = Number(this.numero1) / Number(this.numero2);
    } else {
      alert("Não é possível dividir por zero!");
    }
  }

}