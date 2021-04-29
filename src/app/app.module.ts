import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import{ FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavComponent } from './componentes/nav/nav.component';
import { AsideComponent } from './componentes/aside/aside.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SolicitudComponent } from './componentes/solicitud/solicitud.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { DirectivaComponent } from './componentes/directiva/directiva.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    PrincipalComponent,
    SolicitudComponent,
    ImagenesComponent,
    ContactoComponent,
    InformacionComponent,
    BlogComponent,
    DirectivaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
