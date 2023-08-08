import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/servicios/firebaseCodeError.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private loginService: LoginService,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loginService.getusuarioIdentificado().subscribe((auth) => {
      if (auth) {
        this.router.navigate(["/"])
      }
    });
  }

  registro() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if(password != repetirPassword){
      this.toastr.error("Las contraseñas deben ser las mismas", "Error")
      return;
    }

    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.loading = false;
        this.verificarCorreo();
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error(this.firebaseError.codeError(error.code), "Error");
      });
  }

  verificarCorreo(){
    this.afAuth.currentUser.then(user => user?.sendEmailVerification())
                        .then(()=> {
                            this.toastr.info("Le enviamos un correo electrónico para su verificación", "Verificar Correo");
                            this.router.navigate(["/login"]);
                        });
  }


}
