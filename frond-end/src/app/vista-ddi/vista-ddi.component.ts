import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vista-ddi',
  templateUrl: './vista-ddi.component.html',
  styleUrl: './vista-ddi.component.css'
})
export class VistaDDIComponent {

  nombreUserSecion: string = "";

  CeCoArray : any[] = [];

  num_CeCo: number = 0;
  nombre_CeCo: string = "";
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
  nombre_banco: string = ""

  currentPrestadorID = "";

  BoletaRechazadaArray: any[] =[];
  BoletaArray : any[] = [];

  rutPrest: number = 0;
  DVPrest: string = "";
  nombrePrest: string = "";
  id_bancoPrest: number = 0;
  numero_cuentaPrest: number = 0;
  correoPrest: string = "";
  numBoleta: string = "";
  fechaBoleta: string = "";
  nomBoletaAdjunta: string = "";
  CeCo: number = 0;
  nombreUser: string = "";
  aprobacion1: number = 0;
  aprobacion2: number = 0;
  aprobacion3: number = 0;
  aprobacion4: number = 0;
  jefatura: number = 0;

  aprobacionBoleta: string = "";

  currentBoletaID = "";

  constructor(private http: HttpClient, private userService: UserService )
  {
    this.getAllCeCo();
    this.getAllPrestador();
    this.getAllBoletas();
  }

  ngOnInit(): void {
    this.ocultarCeco();
    this.ocultarPrestador();
    this.ocultarBoleta();
    this.nombreUserSecion = this.userService.getNombre();
    this.ocultarRechazada();
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
    this.ocultarPrestador();
    this.ocultarBoleta();
    this.ocultarRechazada();
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
    this.currentPrestadorID = data.id;
    
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

    this.http.put("http://127.0.0.1:8000/prestadorservicios"+ this.currentPrestadorID , bodyData).subscribe((resultData: any)=>
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
    this.http.delete("http://127.0.0.1:8000/prestadorservicios"+ "/"+ data.id).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Prestador de Servicios Eliminado")
      this.getAllPrestador();
    });
  }

  saveRecordsCeCo()
  {
    let bodyData = {
      "num_CeCo" : this.num_CeCo,
      "nombre_CeCo" : this.nombre_CeCo,
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
    this.num_CeCo = data.num_CeCo;
    this.nombre_CeCo = data.nombre_CeCo;
    this.fecha_inicio = data.fecha_inicio;
    this.fecha_fin = data.fecha_fin;
    this.currentCeCoID = data.id;
  }

  UpdateRecordsCeCo()
  {
    let bodyData = 
    {
      "num_CeCo" : this.num_CeCo,
      "nombre_CeCo" : this.nombre_CeCo,
      "fecha_inicio" : this.fecha_inicio,
      "fecha_fin" : this.fecha_fin,
    };

    this.http.put("http://127.0.0.1:8000/ceco"+ this.currentCeCoID , bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Centro de Costo Registered Updated")
      this.nombre_CeCo ="";
      this.fecha_inicio = "";
      this.fecha_fin = "";

      this.getAllCeCo();
    });
  }

  setDeleteCeCo(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/ceco"+ "/"+ data.id).subscribe((resultData: any)=>
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
    this.ocultarBoleta();
    this.ocultarRechazada();
  }

  saveRecordsBoleta()
  {
    let bodyData = {
      "rutPrest" : this.rutPrest,
      "DVPrest" : this.DVPrest,
      "nombrePrest" : this.nombrePrest,
      "id_bancoPrest" : this.id_bancoPrest,
      "numero_cuentaPrest" : this.numero_cuentaPrest,
      "correoPrest" : this.correoPrest,
      "numBoleta" : this.numBoleta,
      "fechaBoleta" : this.fechaBoleta,
      "nomBoletaAdjunta" : this.nomBoletaAdjunta,
      "CeCo" : this.CeCo,
      "nombreUser" : this.nombreUser,
      "aprobacion1" : this.aprobacion1,
      "aprobacion2" : this.aprobacion2,
      "aprobacion3" : this.aprobacion3,
      "aprobacion4" : this.aprobacion4,
      "jefatura" : this.jefatura
    }

    this.http.post("http://127.0.0.1:8000/boleta",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("boleta Registrado Correctamente");
      this.getAllBoletas();
    });
  }

  getAllBoletas()
  {
    this.http.get("http://127.0.0.1:8000/boleta")
    .subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.BoletaArray = resultData;
    });
  }

  setUpdateBoleta(data: any)
  {
    this.rutPrest = data.rutPrest;
    this.DVPrest = data.DVPrest;
    this.nombrePrest = data.nombrePrest;
    this.id_bancoPrest = data.id_bancoPrest;
    this.numero_cuentaPrest = data.numero_cuentaPrest;
    this.correoPrest = data.correoPrest;
    this.numBoleta = data.numBoleta;
    this.fechaBoleta = data.fechaBoleta;
    this.nomBoletaAdjunta = data.nomBoletaAdjunta;
    this.CeCo = data.CeCo;
    this.nombreUser = data.nombreUser;
    this.aprobacion1 = data.aprobacion1;
    this.aprobacion2 = data.aprobacion2;
    this.aprobacion3 = data.aprobacion3;
    this.aprobacion4 = data.aprobacion4;
    this.jefatura = data.jefatura;
    this.currentBoletaID = data.id;

  }

  UpdateRecordsBoleta()
  {
    let bodyData = 
    {
      "rutPrest" : this.rutPrest,
      "DVPrest" : this.DVPrest,
      "nombrePrest" : this.nombrePrest,
      "id_bancoPrest" : this.id_bancoPrest,
      "numero_cuentaPrest" : this.numero_cuentaPrest,
      "correoPrest" : this.correoPrest,
      "numBoleta" : this.numBoleta,
      "fechaBoleta" : this.fechaBoleta,
      "nomBoletaAdjunta" : this.nomBoletaAdjunta,
      "CeCo" : this.CeCo,
      "nombreUser" : this.nombreUser,
      "aprobacion1" : this.aprobacion1,
      "aprobacion2" : this.aprobacion2,
      "aprobacion3" : this.aprobacion3,
      "aprobacion4" : this.aprobacion4,
      "jefatura" : this.jefatura
    };

    this.http.put("http://127.0.0.1:8000/boleta"+ this.currentBoletaID , bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Boleta Registered Updated")

      this.rutPrest = 0;
      this.DVPrest = "";
      this.nombrePrest = "";
      this.id_bancoPrest = 0;
      this.numero_cuentaPrest = 0;
      this.correoPrest = "";
      this.fechaBoleta = "";
      this.nomBoletaAdjunta = "";
      this.CeCo = 0;
      this.nombreUser = ""
      this.aprobacion1 = 0;
      this.aprobacion2 = 0;
      this.aprobacion3 = 0;
      this.aprobacion4 = 0;
      this.jefatura = 0;

      this.getAllBoletas();
    });
  }

  setDeleteBoleta(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/boleta"+ "/"+ data.id).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Boleta Eliminado")
      this.getAllBoletas();
    });
  }

  ocultarBoleta()
  {
    const navElement = document.getElementById('divBoleta');
    if (navElement) {
      navElement.style.display = 'none';
    }
    const navElement2 = document.getElementById('divBoleta2');
    if (navElement2) {
      navElement2.style.display = 'none';
    }
  }

  mostrarBoleta()
  {
    const navElement = document.getElementById('divBoleta');
    if (navElement) {
      navElement.style.display = 'block';
    }
    const navElement2 = document.getElementById('divBoleta2');
    if (navElement2) {
      navElement2.style.display = 'block';
    }
    this.ocultarPrestador();
    this.ocultarCeco();
    this.ocultarRechazada();
  }

  getBankName(id: number): string{
    
    switch(id){
      case 1:
        this.nombre_banco = "BANCO DE CHILE"
        break;
      case 2:
        this.nombre_banco = "BANCO INTERNACIONAL"
        break;
      case 3:
        this.nombre_banco = "SCOTIABANK CHILE"
        break;
      case 4:
        this.nombre_banco = "BANCO DE CREDITO E INVERSIONES"
        break;
      case 5:
        this.nombre_banco = "BANCO BICE"
        break;
      case 6:
        this.nombre_banco = "HSBC BANK"
        break;
      case 7:
          this.nombre_banco = "BANCO SANTANDER-CHILE"
          break;
      case 8:
        this.nombre_banco = "BANCO ITAÚ CHILE"
        break;
      case 9:
        this.nombre_banco = "BANCO SECURITY"
        break;
      case 10:
        this.nombre_banco = "BANCO FALABELLA"
        break;
      case 11:
        this.nombre_banco = "BANCO RIPLEY"
        break;
      case 12:
        this.nombre_banco = "BANCO CONSORCIO"
        break;
      case 13:
        this.nombre_banco = "BANCO BTG PACTUAL CHILE"
        break;
      case 14:
        this.nombre_banco = "JP MORGAN CHASE BANK, N. A."
        break;
      case 15:
        this.nombre_banco = "CHINA CONSTRUCTION BANK"
        break;
      case 16:
        this.nombre_banco = "BANK OF CHINA"
        break;
      case 17:
        this.nombre_banco = "BANCO DE CHILE"
        break;
    }
    return this.nombre_banco;
  }

  estadoAprobacion(aprobacion1: number): string{
    switch(aprobacion1){
      case 0:
        this.aprobacionBoleta = "Ingresada"
        break;
      case 1:
        this.aprobacionBoleta = "Aprobada"
        break;
      case 2:
        this.aprobacionBoleta = "Rechasada"
        break;
    }
    return this.aprobacionBoleta;
  }

  boletasRechazadas(){
    this.BoletaRechazadaArray = this.BoletaArray.filter(boleta => boleta.aprobacion1 === 2);
  }

  ocultarRechazada()
  {
    const navElement = document.getElementById('divRechazado');
    if (navElement) {
      navElement.style.display = 'none';
    }
  }

  mostrarRechazada()
  {
    this.boletasRechazadas();
    const navElement = document.getElementById('divRechazado');
    if (navElement) {
      navElement.style.display = 'block';
    }
    this.ocultarPrestador();
    this.ocultarBoleta();
    this.ocultarCeco();
  }

  solucionarBoleta(data: any){
    this.setUpdateBoleta(data);
    this.mostrarBoleta();
    this.setDeleteBoleta(data);
    this.aprobacion1 = 0;
  }
}
