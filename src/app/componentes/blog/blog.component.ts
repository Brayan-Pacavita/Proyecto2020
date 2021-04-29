import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public datos: any;
  estado=true;
  dia=10;
  edad=52;
  arreglo=[1,2,3,4,5,6,7,8,9];
  numero: number;

  

  mayorEdad(): boolean{
    if(this.edad>=18)
      return true;
    else 
      return false;
  }

  constructor() { 
    this.datos = {
      numero:''
    };
  }

  ngOnInit(): void {
  }

}
