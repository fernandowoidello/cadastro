import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importações do projeto
import { FormsModule } from '@angular/forms'; // Importações do projeto

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CadastroPessoaComponent } from './componentes/cadastro-pessoa/cadastro-pessoa.component';

import { MatToolbarModule } from '@angular/material/toolbar'; // Importações do Angular Material
import { MatIconModule } from '@angular/material/icon'; // Importações do Angular Material
import { MatButtonModule } from '@angular/material/button'; // Importações do Angular Material
import { ListaPessoaComponent } from './componentes/lista-pessoa/lista-pessoa.component';
import { MatInputModule } from '@angular/material/input'; // Importações do Angular Material
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from './services/auth.service';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CadastroPessoaComponent,
    ListaPessoaComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Tempo padrão de exibição (em milissegundos)
      positionClass: 'toast-top-right', // Posição padrão do toastr
      preventDuplicates: true, // Evita a exibição de mensagens duplicadas
      progressBar: true, // Exibe barra de progresso
      closeButton: true // Exibe botão de fechar
      // Outras opções de configuração aqui...
    }),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // ReactiveFormsModule adicionado
    FormsModule, // FormsModule adicionado
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule, // MatInputModule adicionado
    MatListModule,
    MatFormFieldModule,
    //NgxMaskModule // NgxMaskModule importado

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  //declarations: [AppComponent],
})
export class AppModule { }
