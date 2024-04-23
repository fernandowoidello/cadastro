import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Importe o ToastrService
import { AuthService } from 'src/app/services/auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  exibirBotaoCadastro: boolean = true; // Variável de controle para exibir ou não o botão


  //usuário e a senha fictícios para validar
  fakeUsername: string = '07864877982';
  fakePassword: string = '123456';

  usuario: string = ''; // receber do input
  senha: string = ''; //receber do input

  constructor(private router: Router, private toastr: ToastrService, private authservice: AuthService) {}

  ngOnInit(): void {}

  irParaCadastroPessoa(): void {
    // Define como false para esconder o botão
    this.router.navigate(['/cadastro-pessoa']);
  }

  // Método para recuperar senha
  recuperarSenha(): void {

    // Aqui você pode implementar a lógica para recuperar a senha do usuário
    console.log('Solicitação de recuperação de senha para o usuário:', this.usuario);
    // Adicione aqui a lógica para enviar um SMS de recuperação de senha, por exemplo

    // Simula o envio de SMS de recuperação de senha
    const smsEnviadoComSucesso = this.enviarSMS(this.usuario);

    if (smsEnviadoComSucesso) {
      this.toastr.success('SMS de recuperação de senha enviado com sucesso!', 'Sucesso');
    } else {
      this.toastr.error('Erro ao enviar SMS de recuperação de senha. Tente novamente mais tarde.', 'Erro');
    }
  }

  enviarSMS(usuario: string): boolean {
    // Aqui você implementaria a lógica real para enviar o SMS, retornando true se for bem-sucedido e false em caso de falha.
    // Exemplo simplificado:
    return true; // SMS enviado com sucesso
  }

  public validarCPF(cpf: string): boolean {


    cpf = cpf.replace(/\D/g, "");


    if (cpf == null) {
      return false;
    }
    if (cpf.length != 11) {
      return false;
    }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222')
      ||(cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555')
      ||(cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999'))
      {
      return false;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) == -1) {
        return false;
      }
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
      digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
      digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
      return false;
    }
    else {
      return true;
    }
  }
  login(): void {
    console.log('username', this.usuario);
    console.log('password', this.senha);

    if (!this.validarCPF(this.usuario)) {
      console.log('CPF inválido.');
      this.mostrarNotificacao('CPF inválido!', 'Erro de Login');
      return;
    }

    const loginValido = this.authservice.logar(this.usuario, this.senha)


    if (loginValido) {
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

