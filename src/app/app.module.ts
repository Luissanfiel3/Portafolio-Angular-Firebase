import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; //Importar manualmente HTTPclientelmodule

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
// Siempre verificar que las declaraciones de cada compnente creado están aquí
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    /*IMPORTANTE Es necesario importar approutingmodule*/ 
    AppRoutingModule,
    /* Permite hacer epticiones GET , LIST ... a servidores Rest */
    HttpClientModule
  ],   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
