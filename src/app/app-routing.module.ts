import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPessoaComponent } from './componentes/cadastro-pessoa/cadastro-pessoa.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListaPessoaComponent } from './componentes/lista-pessoa/lista-pessoa.component';
import { AuthGuard } from './auth.guard';


const appRoutes: Routes = [
  {
    path: 'cadastro-pessoa', // Define o caminho da rota, acessível por meio do URL '/cadastro-pessoa'
    component: CadastroPessoaComponent, // Associa o componente CadastroPessoaComponent a essa rota
    canActivate: [AuthGuard], // Lista de guardas de rota que serão acionados para verificar se a rota pode ser ativada
  },

  {
    path: 'login', //cabecalho
    component: LoginComponent,
    canActivate: [],
  },

  {
    path: 'lista-pessoa',
    component: ListaPessoaComponent,
    canActivate: [AuthGuard],
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
