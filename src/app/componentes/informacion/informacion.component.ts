import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  valor1: '';
  valor2: '';

  public usuario: any;

  constructor() { 

    this.usuario = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''

    };
  }

  suma(){
    let result = this.valor1+this.valor2;
    return result;
  }

 ngOnInit(): void {
  }

}
