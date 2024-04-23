import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private storage: Storage;


  constructor() {
    this.storage = window.localStorage;
  }

    // Método para salvar dados no armazenamento local
  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Método para recuperar dados do armazenamento local
  getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Método para remover dados do armazenamento local
  removeData(key: string): void {
    localStorage.removeItem(key);
  }

    // Método para limpar todo o armazenamento local
    clearStorage(): void {
      localStorage.clear();
    }
}
