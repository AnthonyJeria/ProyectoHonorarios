import { Component } from '@angular/core';
import { IUserLogin } from '../models/IUserLogin';
import { HttpClient } from '@angular/common/http';

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

  UserArray : any[] = [];

  correo: string = "";
  clave: string = "";
  id_tipo_usuario: number = 0;

  currentUsuarioID = "";

  constructor(private http: HttpClient ){}

  showAlert(message: string): void {
    alert(message);
  };


  userLogin(userLoginInfo: IUserLogin){

    if ((userLoginInfo.email == "") || (userLoginInfo.password =="")) {
      alert("Debe llenar todos los campos con informacion")
    }else{
      
      this.http.get("http://127.0.0.1:8000/usuario")
      .subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.UserArray = resultData;
      });

      const usuario = this.UserArray.filter(any => any.correo = userLoginInfo.email);
      alert(userLoginInfo.email)

    }

  }
}
