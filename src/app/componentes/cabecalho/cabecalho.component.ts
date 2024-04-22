import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Importe o ToastrService





@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  exibirBotaoCadastro: boolean = true; // Variável de controle para exibir ou não o botão


  //usuário e a senha fictícios para validar
  fakeUsername: string = '07864877982';
  fakePassword: string = '123456';

  usuario: string = ''; // receber do input
  senha: string = ''; //receber do input

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  irParaCadastroPessoa(): void {
    // Define como false para esconder o botão
    this.router.navigate(['/cadastro-pessoa']);
  }

  // Método para recuperar senha
  recuperarSenha(): void {
    // Aqui você pode implementar a lógica para recuperar a senha do usuário
    console.log('Solicitação de recuperação de senha para o usuário:', this.usuario);
    // Adicione aqui a lógica para enviar um email de recuperação de senha, por exemplo
  }


  // Função para verificar se o CPF possui apenas números e está no formato correto
  validarCPF(cpf: string): boolean {
    // Remove todos os caracteres que não são números
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos ou se todos os dígitos são iguais
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
      return false;
    }

    // Calcula os dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto >= 10 ? 0 : resto;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto >= 10 ? 0 : resto;

    // Verifica se os dígitos verificadores calculados são iguais aos do CPF
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1 || parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
    }

    // CPF válido
    return true;
  }

  login(): void {
    console.log('username', this.usuario);
    console.log('password', this.senha);

    if (!this.validarCPF(this.usuario)) {
      console.log('CPF inválido.');
      this.mostrarNotificacao('CPF inválido!', 'Erro de Login');
      return;
    }

    if (this.usuario == this.fakeUsername && this.senha == this.fakePassword) {
      console.log('Login bem-sucedido!');
      this.router.navigate(['/lista-pessoa']);
    } else {
      console.log('Nome de usuário ou senha incorretos.');
      this.mostrarNotificacao('Nome de usuário ou senha incorretos!', 'Erro de Login');
    }
  }

  mostrarNotificacao(mensagem: string, titulo: string): void {
    this.toastr.error(mensagem, titulo);
  }
}

