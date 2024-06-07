import { Component } from '@angular/core';
import { IUserLogin } from "../models/IUserLogin"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userLoginModal: IUserLogin = {
    email: 'pepe',
    password: 'rere'
  };

  showAlert(message: string): void {
    alert(message);
  };

  userLogin(userLoginInfo: IUserLogin){

    if ((userLoginInfo.email == "anth")) {
      this.showAlert("Funciona");
    }
    else{
      this.showAlert("No Funciona" + " " +   userLoginInfo.email + " " + userLoginInfo.password)
    }
  }

}
