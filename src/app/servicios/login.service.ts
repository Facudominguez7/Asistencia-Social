import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { map } from "rxjs/operators";

@Injectable()
export class LoginService{

  constructor(private authService: AngularFireAuth){

  }



  getusuarioIdentificado(){
    return this.authService.authState.pipe(
      map( auth => auth)
    );
  }

  logout(){
    this.authService.signOut();
  }




}
