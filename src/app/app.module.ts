import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule aqui
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CadastroPessoaComponent } from './componentes/cadastro-pessoa/cadastro-pessoa.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ListaPessoaComponent } from './componentes/lista-pessoa/lista-pessoa.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [

    AppComponent,
    CabecalhoComponent,
    CadastroPessoaComponent,
    ListaPessoaComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Adicione o ReactiveFormsModule aqui
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
