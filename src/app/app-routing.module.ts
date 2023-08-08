import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComedorComponent } from './componentes/editar-comedor/editar-comedor.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { TableroComedoresComponent } from './componentes/tablero-comedores/tablero-comedores.component';
import { TableroAsistenciaGeneral } from './componentes/tablero-AsistenciaGeneral/tablero-AsistenciaGeneral.component';
import { AuthGuard } from './guardianes/auth.guard';
import { InfoAsistenciaGralComponent} from './componentes/info-AsistenciaGeneral/info-AsistenciaGral.component';
import { InfoComedorComponent } from './componentes/info-comedor/info-comedor.component';
import { EditarAsistenciaGeneralComponent } from './componentes/editar-AsistenciaGral/editar-asistenciaGral.component';
import { InsumoComedorComponent } from './componentes/insumo-comedor/insumo-comedor.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { TableroBajasComponent } from './componentes/tablero-bajas/tablero-bajas.component';
import { EditarBajasComponent } from './componentes/editar-bajas/editar-bajas.component';
import { InfoBajasComponent } from './componentes/info-bajas/info-bajas.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'verificar-correo', component: VerificarCorreoComponent},
  {path: 'recuperar-password', component: RecuperarPasswordComponent},
  {path:'', component: TableroComedoresComponent, canActivate: [AuthGuard]},
  {path:'asistenciasGrales', component: TableroAsistenciaGeneral, canActivate: [AuthGuard]},
  {path: 'bajas', component: TableroBajasComponent, canActivate: [AuthGuard]},
  {path: 'baja/editar/:id', component: EditarBajasComponent, canActivate: [AuthGuard]},
  {path: 'baja/info/:id', component: InfoBajasComponent, canActivate: [AuthGuard]},
  {path: 'comedor/editar/:id', component: EditarComedorComponent, canActivate: [AuthGuard]},
  {path: 'comedor/info/:id', component: InfoComedorComponent, canActivate: [AuthGuard]},
  {path: 'comedor/insumo/:id', component: InsumoComedorComponent, canActivate: [AuthGuard]},
  {path: 'asistenciaGral/editar/:id', component: EditarAsistenciaGeneralComponent, canActivate: [AuthGuard]},
  {path: 'asistenciaGral/info/:id', component: InfoAsistenciaGralComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoEncontradoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
El path: '' en el objeto de ruta indica la ruta raíz o la página de inicio de la aplicación. Si el usuario no proporciona ninguna ruta, esta ruta será la ruta predeterminada que se mostrará. En este caso, se utiliza para la página de inicio de la aplicación y se asigna el componente TableroComedoresComponent.
*/
