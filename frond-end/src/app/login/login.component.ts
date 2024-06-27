import { Component } from '@angular/core';
import { IUserLogin } from '../models/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userLoginModal: IUserLogin = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router){}

  showAlert(message: string): void {
    alert(message);
  };


  userLogin(userLoginInfo: IUserLogin){

    if ((userLoginInfo.email == "") || (userLoginInfo.password =="")) {
      alert("Debe llenar todos los campos con informacion")
    }else{
      
      if((userLoginInfo.email == "anth.jeria@duocuc.cl") && (userLoginInfo.password =="admin1234")){
        this.router.navigate(['admin']);
      }else{
        alert("Usuario o Contraseña Incorrectos")
      }

    }
  }
}
