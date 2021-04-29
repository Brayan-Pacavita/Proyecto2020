import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
//Datos

  nombre='Brayan';
  edad=20;
  sueldos= [1700, 1600, 1900];
  activo= true;
  sitio='http://www.google.com';
  

//Metodo porpiedad 'activo'
  esActivo(){
    if(this.activo)
      return 'trabajador activo';
    else
      return 'trabajador inactivo';
  }

  //retorno las suma de los 3 sueldos;
  ultimosSueldos(){
    let suma= 0;
    for (let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
      return suma; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
