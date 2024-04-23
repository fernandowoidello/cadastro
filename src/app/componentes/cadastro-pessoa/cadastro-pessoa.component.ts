import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importe o Router
import { pessoaModelView } from 'src/app/classes/pessoa';
import { ToastrService } from 'ngx-toastr'; // Importe o ToastrService


@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent {
  cadastroForm: FormGroup = new FormGroup({}); // Inicialização da propriedade cadastroForm
  objPessoa: pessoaModelView = new pessoaModelView(); // Remova a inicialização do objeto
  lsPessoas: pessoaModelView[] = []; // Remova a inicialização da lista

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.criarFormulario();
  }

  criarFormulario() {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(30)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(30)]],
      telefone: ['', Validators.required],
      email: [''],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      senhaPessoa: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  get form() {
    return this.cadastroForm.controls;
  }

  onSubmit() {
    if (this.cadastroForm.valid && this.camposPreenchidos()) {
      console.log('Formulário válido. Enviar para o servidor:', this.cadastroForm.value);
      // Aqui você pode enviar os dados para o servidor

      // Após o cadastro, redirecione para a lista de pessoas
      this.redirecionarParaListaPessoa();
    } else {
      console.log('Formulário inválido. Verifique os campos.');
      // Aqui você pode implementar alguma lógica para lidar com o formulário inválido, como exibir mensagens de erro
    }
  }

  camposPreenchidos(): boolean {
    const controls = this.cadastroForm.controls;
    if (!controls) {
      return false; // Retorna falso se this.cadastroForm.controls for nulo
    }

    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];
        if (!control) {
          continue; // Pula para a próxima iteração se o controle for nulo
        }
        if (control.errors && control.errors['required']) {
          return false; // Retorna falso se algum campo obrigatório estiver vazio
        }
      }
    }
    return true; // Retorna verdadeiro se todos os campos obrigatórios estiverem preenchidos
  }


  voltarParaTelaInicial() {
    this.router.navigate(['']); // Navegação para a rota inicial
  }

  limparFormulario() {
    this.objPessoa = new pessoaModelView(); // Recria o objeto pessoaModelView
    this.cadastroForm.reset(); // Reseta o formulário
  }

// // Método para realizar o cadastro
// cadastrar(): void {
//   // Obtém os dados do formulário
//   const dados = this.cadastroForm.value;

//   // Envia os dados para o backend
//   this.http.post<any>('URL_DO_BACKEND/cadastrar', dados).subscribe(
//     () => {
//       // Limpa o formulário
//       this.cadastroForm.reset();
//       // Exibe mensagem de sucesso utilizando Toastr
//       this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
//       // Redireciona para a lista de pessoas após o cadastro
//       this.router.navigate(['/lista-pessoa']);
//     },
//     error => {
//       // Exibe mensagem de erro utilizando Toastr em caso de falha no cadastro
//       this.toastr.error('Erro ao cadastrar. Tente novamente mais tarde.', 'Erro');
//       console.error('Erro no cadastro:', error);
//     }
//   );
// }

  redirecionarParaListaPessoa(): void {
    this.toastr.success('Cadastro realizado com sucesso!', 'Sucesso');
    this.router.navigate(['/lista-pessoa']);

  }
}
