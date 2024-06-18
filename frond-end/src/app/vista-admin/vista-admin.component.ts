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

  CeCoArray : any[] = [];

  numCeCo: number = 0;
  nombreCeCo: string = "";
  fecha_inicio: string = "";
  fecha_fin: string = "";

  currentCeCoID = "";

  constructor(private http: HttpClient )
  {
    this.getAllUser();
    this.getAllCeCo();
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
    const navElement = document.getElementById('divUser');
    if (navElement) {
      navElement.style.display = 'none';
    }
    const navElement2 = document.getElementById('divUser2');
    if (navElement2) {
      navElement2.style.display = 'none';
    }
  }

  ocultarCeco()
  {
    const navElement = document.getElementById('divCeCo');
    if (navElement) {
      navElement.style.display = 'none';
    }
    const navElement2 = document.getElementById('divCeCo2');
    if (navElement2) {
      navElement2.style.display = 'none';
    }
  }

  saveRecordsCeCo()
  {
    let bodyData = {
      "numCeCo" : this.numCeCo,
      "nombreCeCo" : this.nombreCeCo,
      "fecha_inicio" : this.fecha_inicio,
      "fecha_fin" : this.fecha_fin,
    }

    this.http.post("http://127.0.0.1:8000/ceco",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Cetro de Costo Registrado Correctamente");
      this.getAllCeCo();
    });
  }

  getAllCeCo()
  {
    this.http.get("http://127.0.0.1:8000/ceco")
    .subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.CeCoArray = resultData;
    });
  }

  setUpdateCeCo(data: any)
  {
    this.numCeCo = data.numCeCo;
    this.nombreCeCo = data.nombreCeCo;
    this.fecha_inicio = data.fecha_inicio;
    this.fecha_fin = data.fecha_fin;
  }

  UpdateRecordsCeCo()
  {
    let bodyData = 
    {
      "numCeCo" : this.numCeCo,
      "nombreCeCo" : this.nombreCeCo,
      "fecha_inicio" : this.fecha_inicio,
      "fecha_fin" : this.fecha_fin,
    };

    this.http.put("http://127.0.0.1:8000/ceco"+ this.numCeCo , bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Centro de Costo Registered Updated")
      this.numCeCo = 0;
      this.nombreCeCo ="";
      this.fecha_inicio = "";
      this.fecha_fin = "";

      this.getAllCeCo();
    });
  }

  setDeleteCeCo(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/ceco"+ "/"+ data.numCeCo).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Centro de Costo Eliminado")
      this.getAllCeCo();
    });
  }
}
