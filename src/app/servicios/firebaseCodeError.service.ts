import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseCodeErrorService {
  constructor() {}

  codeError(code: string) {
    switch (code) {
      //Correo que ya existe
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
      //Contraseña debil
      case 'auth/weak-password':
        return 'La contraseña es muy débil';
      //Correo invalido
      case 'auth/invalid-email':
        return 'Correo invalido';
      //Contraseña incorrecta
      case 'auth/wrong-password':
        return 'Contraseña incorrecta';
      //El usuario no existe
      case 'auth/user-not-found':
        return 'El ususario no existe';
      default:
        return 'Error desconocido';
    }
  }
}
