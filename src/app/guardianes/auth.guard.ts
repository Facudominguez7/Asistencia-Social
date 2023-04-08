import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((auth) => {
        if (!auth) {
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
  /*
   es una implementación del guard de ruta CanActivate. Este guard se utiliza para proteger las rutas de la aplicación y permitir que solo los usuarios autenticados puedan acceder a ellas.

En este caso, la función canActivate() utiliza el servicio AngularFireAuth para comprobar si el usuario está autenticado o no. La propiedad authState de AngularFireAuth es un Observable que emite el estado de autenticación del usuario. Si el usuario no está autenticado (auth es null o undefined), se redirige al usuario a la página de inicio (this.router.navigate(['/']);) y se devuelve false, lo que indica que el acceso a la ruta no está permitido. Si el usuario está autenticado (auth no es null ni undefined), se devuelve true, lo que indica que el acceso a la ruta está permitido.

En resumen, este código protege las rutas de la aplicación permitiendo el acceso solo a usuarios autenticados y redirigiendo a los usuarios no autenticados a la página de inicio./*
*/
}
