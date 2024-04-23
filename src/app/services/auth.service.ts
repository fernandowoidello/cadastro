import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})


export class AuthService {

  constructor(private localstrorage: LocalstorageService){

  }

  isAuthenticated() {

    const token = this.localstrorage.getData("token")

    console.log(token)
    return !!token;
  }

  logar(usuario: string, senha: string) {
    const fakeUsername: string = '07864877982';
    const fakePassword: string = '123456';

    if(fakeUsername !== usuario || fakePassword !== senha){
    console.log("Senha incorreta. Tente novamente.")
    return false
    }
    this.localstrorage.saveData("token", "logado")
    return true;
  }
  deslogar(){

  }
}
