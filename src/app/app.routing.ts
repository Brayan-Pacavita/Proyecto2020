//importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterState } from '@angular/router';

//importar componentes
import {PrincipalComponent} from './componentes/principal/principal.component';
import {ContactoComponent} from './componentes/contacto/contacto.component';
import {SolicitudComponent} from './componentes/solicitud/solicitud.component';
import {PaginaComponent} from './componentes/pagina/pagina.component';
import {InformacionComponent} from './componentes/informacion/informacion.component';
import {BlogComponent} from './componentes/blog/blog.component';
import {DirectivaComponent} from './componentes/directiva/directiva.component';

//array de rutas
const appRoutes: Routes=[
    {path:'', component: PrincipalComponent},
    {path:'principal', component: PrincipalComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'solicitud', component: SolicitudComponent},
    {path:'pagina', component: PaginaComponent},
    {path:'informacion', component: InformacionComponent},
    {path:'blog', component: BlogComponent},
    {path:'directiva', component: DirectivaComponent},

];

//exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

