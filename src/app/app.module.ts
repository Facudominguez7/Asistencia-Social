import { ChangeDetectorRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFirestoreModule,
  SETTINGS,
} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { TableroComedoresComponent } from './componentes/tablero-comedores/tablero-comedores.component';
import { ComedoresComponent } from './componentes/comedores/comedores.component';
import { EditarComedorComponent } from './componentes/editar-comedor/editar-comedor.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { ComdeorServicio } from './servicios/comedor.service';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guardianes/auth.guard';
import { AsistenciaGeneralServicio } from './servicios/AsistenciaGeneral.service';

import { EditarAsistenciaGeneralComponent } from './componentes/editar-AsistenciaGral/editar-asistenciaGral.component';
import { TableroAsistenciaGeneral} from './componentes/tablero-AsistenciaGeneral/tablero-AsistenciaGeneral.component';

import { InfoComedorComponent } from './componentes/info-comedor/info-comedor.component';
import { InfoAsistenciaGralComponent } from './componentes/info-AsistenciaGeneral/info-AsistenciaGral.component';
import { AsistenciaGeneralComponent } from './componentes/Asistencias Generales/AsistenciaGral.component';
import { InsumoComedorComponent } from './componentes/insumo-comedor/insumo-comedor.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComedoresComponent,
    ComedoresComponent,
    EditarComedorComponent,
    LoginComponent,
    NoEncontradoComponent,
    PiePaginaComponent,
    TableroAsistenciaGeneral,
    InfoComedorComponent,
    InfoAsistenciaGralComponent,
    EditarAsistenciaGeneralComponent,
    AsistenciaGeneralComponent,
    InsumoComedorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'Asistencia-Social'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFireStorageModule,

  ],
  providers: [AsistenciaGeneralServicio, ComdeorServicio, LoginService, AuthGuard, InsumosServicio],
  bootstrap: [AppComponent],
})
export class AppModule {}
