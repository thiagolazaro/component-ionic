import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  implements OnInit {
  @Input() label!: string; // Rótulo do campo de input
  @Input() type: string = 'text'; // Tipo de input (text, email, etc.)
  @Input() placeholder!: string; // Texto de placeholder
  @Input() value!: string; // Valor inicial do input
  @Input() icon!: string; // Ícone do input
  @Input() iconColor!: string; // Cor do ícone
  passwordOrText: boolean = false; // Flag para mostrar/esconder senha
  isTogglePassword: boolean = false; // Ícone para mostrar/esconder senha


  constructor() { }

  ngOnInit() {}

  changeVisibility() {
    this.isTogglePassword = true;
    this.passwordOrText = !this.passwordOrText;
    this.type = this.passwordOrText ? 'text' : 'password';
  }

}
