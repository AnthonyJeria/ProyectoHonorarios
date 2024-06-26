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

  PrestadorArray : any[] = [];

  rutPrestador: number = 0;
  DVPrestador: string = "";
  nombrePrestador: string = "";
  apellido1Prestador: string = "";
  apellido2Prestador: string = "";
  correoPrestador: string = "";
  id_banco: number = 0;
  tipo_cuenta: string = "";
  numero_cuenta: number = 0;

  currentPrestadorID = "";

  constructor(private http: HttpClient )
  {
    this.getAllUser();
    this.getAllCeCo();
    this.getAllPrestador();
  }

  ngOnInit(): void {
    this.ocultarUserAdmin();
    this.ocultarCeco();
    this.ocultarPrestador();
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

  mostrarUserAdmin()
  {
    const navElement = document.getElementById('divUser');
    if (navElement) {
      navElement.style.display = 'block';
    }
    const navElement2 = document.getElementById('divUser2');
    if (navElement2) {
      navElement2.style.display = 'block';
    }

    this.ocultarCeco()
    this.ocultarPrestador();
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

  mostrarCeco()
  {
    const navElement = document.getElementById('divCeCo');
    if (navElement) {
      navElement.style.display = 'block';
    }
    const navElement2 = document.getElementById('divCeCo2');
    if (navElement2) {
      navElement2.style.display = 'block';
    }

    this.ocultarUserAdmin()
    this.ocultarPrestador();
  }

  saveRecordsPrestador()
  {
    let bodyData = {
      "rutPrestador" : this.rutPrestador,
      "DVPrestador" : this.DVPrestador,
      "nombrePrestador" : this.nombrePrestador,
      "apellido1Prestador" : this.apellido1Prestador,
      "apellido2Prestador" : this.apellido2Prestador,
      "correoPrestador" : this.correoPrestador,
      "id_banco" : this.id_banco,
      "tipo_cuenta" : this.tipo_cuenta,
      "numero_cuenta" : this.numero_cuenta,
    }

    this.http.post("http://127.0.0.1:8000/prestadorservicios",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Prestador de Sevicios Registrado Correctamente");
      this.getAllPrestador();
    });
  }

  getAllPrestador()
  {
    this.http.get("http://127.0.0.1:8000/prestadorservicios")
    .subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.PrestadorArray = resultData;
    });
  }

  setUpdatePrestador(data: any)
  {
    this.rutPrestador = data.rutPrestador;
    this.DVPrestador = data.DVPrestador;
    this.nombrePrestador = data.nombrePrestador;
    this.apellido1Prestador = data.apellido1Prestador;
    this.apellido2Prestador = data.apellido2Prestador;
    this.correoPrestador = data.correoPrestador;
    this.id_banco = data.id_banco;
    this.tipo_cuenta = data.tipo_cuenta;
    this.numero_cuenta = data.numero_cuenta;
    
  }

  UpdateRecordsPrestador()
  {
    let bodyData = 
    {
      "rutPrestador" : this.rutPrestador,
      "DVPrestador" : this.DVPrestador,
      "nombrePrestador" : this.nombrePrestador,
      "apellido1Prestador" : this.apellido1Prestador,
      "apellido2Prestador" : this.apellido2Prestador,
      "correoPrestador" : this.correoPrestador,
      "id_banco" : this.id_banco,
      "tipo_cuenta" : this.tipo_cuenta,
      "numero_cuenta" : this.numero_cuenta,
    };

    this.http.put("http://127.0.0.1:8000/prestadorservicios"+ this.rutPrestador , bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Prestador de Servicios Registered Updated")
      this.DVPrestador ="";
      this.nombrePrestador = "";
      this.apellido1Prestador = "";
      this.apellido2Prestador = "";
      this.correoPrestador = "";
      this.id_banco = 0;
      this.tipo_cuenta = "";
      this.numero_cuenta = 0;

      this.getAllPrestador();
    });
  }

  setDeletePrestador(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/prestadorservicios"+ "/"+ data.rutPrestador).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Prestador de Servicios Eliminado")
      this.getAllPrestador();
    });
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

  ocultarPrestador()
  {
    const navElement = document.getElementById('divPrestador');
    if (navElement) {
      navElement.style.display = 'none';
    }
    const navElement2 = document.getElementById('divPrestador2');
    if (navElement2) {
      navElement2.style.display = 'none';
    }
  }

  mostrarPrestador()
  {
    const navElement = document.getElementById('divPrestador');
    if (navElement) {
      navElement.style.display = 'block';
    }
    const navElement2 = document.getElementById('divPrestador2');
    if (navElement2) {
      navElement2.style.display = 'block';
    }

    this.ocultarCeco();
    this.ocultarUserAdmin();
  }
}
