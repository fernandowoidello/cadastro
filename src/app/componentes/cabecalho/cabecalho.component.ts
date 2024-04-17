import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  irParaCadastroPessoa(): void {
    // Define como false para esconder o botão
    this.router.navigate(['/cadastro-pessoa']);
  }

  login(): void {
    console.log('username', this.usuario);
    console.log('password', this.senha);
    // Verifica se o nome de usuário e a senha fornecidos correspondem aos valores fictícios
    if (this.usuario == this.fakeUsername && this.senha == this.fakePassword) {
      // Login válido, redireciona para a próxima página (ou executa outra ação)
      console.log('Login bem-sucedido!');
      this.router.navigate(['/lista-pessoa']); // Redireciona para a lista de pessoas
    } else {
      // Login inválido, exibe mensagem de erro
      console.log('Nome de usuário ou senha incorretos.');
    }
  }
}
