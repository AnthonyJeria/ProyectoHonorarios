import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-vista-visualizador',
  templateUrl: './vista-visualizador.component.html',
  styleUrl: './vista-visualizador.component.css'
})
export class VistaVisualizadorComponent {

  nombreUserSecion: string = "";
  
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

  currentPrestadorID = "";

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
  }

  ocultarCeco()
  {
    const navElement2 = document.getElementById('divCeCo2');
    if (navElement2) {
      navElement2.style.display = 'none';
    }
  }

  mostrarCeco()
  {
    const navElement2 = document.getElementById('divCeCo2');
    if (navElement2) {
      navElement2.style.display = 'block';
    }
    this.ocultarPrestador();
    this.ocultarBoleta();
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

  getAllCeCo()
  {
    this.http.get("http://127.0.0.1:8000/ceco")
    .subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.CeCoArray = resultData;
    });
  }

  ocultarPrestador()
  {
    const navElement2 = document.getElementById('divPrestador2');
    if (navElement2) {
      navElement2.style.display = 'none';
    }
  }

  mostrarPrestador()
  {
    const navElement2 = document.getElementById('divPrestador2');
    if (navElement2) {
      navElement2.style.display = 'block';
    }

    this.ocultarCeco();
    this.ocultarBoleta();
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

  ocultarBoleta()
  {
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
  }
}
