import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private nombre_usuario: string = '';

  setNombre(nombre_usuario: string) {
    this.nombre_usuario = nombre_usuario;
  }

  getNombre(): string {
    return this.nombre_usuario;
  }
}
