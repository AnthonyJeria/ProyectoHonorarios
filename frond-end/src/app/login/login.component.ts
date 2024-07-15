import { Component } from '@angular/core';
import { IUserLogin } from '../models/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userType: number=0

  UserArray : any[] = [];

  rut: number = 0;
  DV: string = "";
  nombre: string = "";
  apellido1: string = "";
  apellido2 : string = "";
  nombre_usuario: string = "";
  correo: string = "";
  clave: string = "";
  id_tipo_usuario: number = 0;

  currentUsuarioID = "";

  userLoginModal: IUserLogin = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router, private userService: UserService){
    this.getAllUser();
  }

  showAlert(message: string): void {
    alert(message);
  };

  getAllUser()
  {
    this.http.get("http://127.0.0.1:8000/usuario")
    .subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.UserArray = resultData;
    });
  }

  userLogin(userLoginInfo: IUserLogin){

    if ((userLoginInfo.email == "") || (userLoginInfo.password =="")) {
      alert("Debe llenar todos los campos con informacion")
    }else{
      
      const user = this.UserArray.find(u => u.correo === userLoginInfo.email && u.clave == userLoginInfo.password);
      if (user){
        this.userType = user.id_tipo_usuario;
        this.userService.setNombre(user.nombre_usuario);
        switch (this.userType){
          case 1:
            this.router.navigate(["/admin"])
            break;
          case 2:
            this.router.navigate(["/aprovador"])
            break;
          case 3:
            this.router.navigate(["/DDC"])
            break;
          case 4:
            this.router.navigate(["/DDI"])
            break;
          case 5:
            this.router.navigate(["/DDA"])
            break;
          case 6:
            this.router.navigate(["/visualizador"])
            break;
        }
      }
      else{
        alert("Email o Contraseña Incorrectos")
      }

    }
  }


}
