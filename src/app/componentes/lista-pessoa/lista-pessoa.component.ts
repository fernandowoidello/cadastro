import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'sobrenome', 'telefone', 'email', 'cpf', 'dataNascimento'];
  //exibirBotaoCadastro: boolean = true; // Variável de controle para exibir ou não o botão


  pessoas: any[] = [];
  ordenacao: string = ''; // Armazena o campo de ordenação
  ordem: number = 1; // 1 para ordem crescente, -1 para ordem decrescente

  constructor(private router: Router) {


  }

  ngOnInit(): void {

    this.pessoas = [
      {
        nome: 'João',
        sobrenome: 'Silva',
        telefone: '(11) 1234-5678',
        email: 'joao@teste.com',
        cpf: '123.456.789-00',
        dataNascimento: '01/01/1990'
      },
      {
        nome: 'Maria',
        sobrenome: 'Santos',
        telefone: '(11) 9876-5432',
        email: 'maria@teste.com',
        cpf: '987.654.321-00',
        dataNascimento: '15/05/1985'
      },
      {
        nome: 'João',
        sobrenome: 'Silva',
        telefone: '(11) 1234-5678',
        email: 'joao@teste.com',
        cpf: '123.456.789-00',
        dataNascimento: '01/01/1990'
      }
    ];

    }

    voltarParaTelaInicial() {
      this.router.navigate(['']); // Navegação para a rota inicial
    }

  ordenar(campo: string): void {
    // Verifica se é o mesmo campo de ordenação, se sim, inverte a ordem
    if (this.ordenacao === campo) {
      this.ordem *= -1;
    } else {
      this.ordenacao = campo;
      this.ordem = 1;
    }

    // Ordena o array de pessoas de acordo com o campo e a ordem
    this.pessoas.sort((a, b) => {
      const valorA = a[campo];
      const valorB = b[campo];

      if (valorA < valorB) {
        return -1 * this.ordem;
      } else if (valorA > valorB) {
        return 1 * this.ordem;
      } else {
        return 0;
      }
    });
  }
  irParaCadastroPessoa(): void {
    // Define como false para esconder o botão
    this.router.navigate(['/cadastro-pessoa']);
}
}
