import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  standalone: false,
})
export class ContatoComponent {
  formData = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  };

  onSubmit() {
    console.log('Formulário enviado:', this.formData);
    alert('Obrigado por entrar em contato! Em breve retornaremos.');
    this.formData = {
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    };
  }
}
