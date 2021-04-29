import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { __values } from 'tslib';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {



 public usuario: any;

     constructor() { 
 
     this.usuario = {
      nombre: '',
      apellidos: '',
      edad : '',
      algebra: '',
      quimica: '',
      fisica: '',
     promedio: '',

       esMayor(){
        if(this.edad < 18)
          return 'es menor de edad';
        else
          return 'es mayor de edad';

        },

        Algebra(){
          if(this.algebra < 3)
            return 'Ha perdido algebra';
          else
            return 'Ha pasado algebra';
  
          },
          Quimica(){
            if(this.quimica < 3)
              return 'Ha perdido Quimica';
            else
              return 'Ha pasado Quimica';
    
            },
            Fisica(){
              if(this.fisica < 3)
                return 'Ha perdido Fisica';
              else
                return 'Ha pasado Fisica';
      
              },

            Promedio(){
            
            if(this.promedio < 3)
              return 'Ha perdido el semestre porque su nota es:' + (this.algebra+this.quimica+this.fisica)/3;
            else
              'Ha pasado el semestre porque su nota es:' + (this.algebra+this.quimica+this.fisica)/3; 
            
            
               
              }
   };
  }

  

  ngOnInit(): void {
  }

}
