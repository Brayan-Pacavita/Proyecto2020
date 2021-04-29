import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  valor1: number;
  valor2: number;
  Opciones: string="ninguna";
  lapices=20;
  esferos=100;
  temperas=70;
  cartulinas=30;
  reglas=40;

  constructor() { }

  ngOnInit(): void {
  }

}
