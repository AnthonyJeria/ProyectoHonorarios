import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrl: './vista-admin.component.css'
})
export class VistaAdminComponent {

  
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


  constructor(private http: HttpClient )
  {
    this.getAllUser();
  }

  saveRecords()
  {
    let bodyData = {
      "rut" : this.rut,
      "DV" : this.DV,
      "nombre" : this.nombre,
      "apellido1" : this.apellido1,
      "apellido2" : this.apellido2,
      "nombre_usuario" : this.nombre_usuario,
      "correo" : this.correo,
      "clave" : this.clave,
      "id_tipo_usuario" : this.id_tipo_usuario
    }

    this.http.post("http://127.0.0.1:8000/usuario",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Usuario Registrado Correctamente");
      this.getAllUser();
    });
  }

  getAllUser()
  {
    this.http.get("http://127.0.0.1:8000/usuario")
    .subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.UserArray = resultData;
    });
  }

  setUpdate(data: any)
  {
    this.rut = data.rut;
    this.DV = data.DV;
    this.nombre = data.nombre;
    this.apellido1 = data.apellido1;
    this.apellido2 = data.apellido2;
    this.nombre_usuario = data.nombre_usuario;
    this.correo = data.correo;
    this.clave = data.clave;
    this.id_tipo_usuario = data.id_tipo_usuario;

  }

  UpdateRecords()
  {
    let bodyData = 
    {
      "rut" : this.rut,
      "DV" : this.DV,
      "nombre" : this.nombre,
      "apellido1" : this.apellido1,
      "apellido2" : this.apellido2,
      "nombre_usuario" : this.nombre_usuario,
      "correo" : this.correo,
      "clave" : this.clave,
      "id_tipo_usuario" : this.id_tipo_usuario
    };

    this.http.put("http://127.0.0.1:8000/usuario"+ this.rut , bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Usuario Registered Updated")
      this.DV = '';
      this.nombre ="";
      this.apellido1 = "";
      this.apellido2 = "";
      this.nombre_usuario = "";
      this.correo = "";
      this.clave = "";
      this.id_tipo_usuario = 0;

      this.getAllUser();
    });
  }

  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/usuario"+ "/"+ data.rut).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Usuario Eliminado")
      this.getAllUser();
    });
  }

  ocultarUserAdmin()
  {
    
  }

}
