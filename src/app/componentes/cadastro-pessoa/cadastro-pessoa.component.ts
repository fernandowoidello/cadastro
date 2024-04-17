import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importe o Router
import { pessoaModelView } from 'src/app/classes/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent {
  cadastroForm: FormGroup = new FormGroup({}); // Inicialização da propriedade cadastroForm
  formulario!: FormGroup<any>;

  constructor(private fb: FormBuilder, private router: Router) {
    this.criarFormulario();
  }

  objPessoa = new pessoaModelView() //instanciando objeto
  lsPessoas : pessoaModelView[] =[]; //instanciando objeto

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

  corrigirIdade() {
    const idadeControl = this.cadastroForm.get('idade');
    if (idadeControl && idadeControl.value < 0) {
      idadeControl.setValue(0);
    }
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Formulário válido. Enviar para o servidor:', this.cadastroForm.value);
      // Aqui você pode enviar os dados para o servidor
    } else {
      console.log('Formulário inválido. Verifique os campos.');
      // Aqui você pode implementar alguma lógica para lidar com o formulário inválido, como exibir mensagens de erro
    }
  }

  voltarParaTelaInicial() {
    this.router.navigate(['']); // Navegação para a rota inicial
  }

  limparFormulario(){
    this.objPessoa = new pessoaModelView(); // Recria o objeto pessoaModelView
    this.cadastroForm.reset(); // Reseta o formulário
  }
  }

