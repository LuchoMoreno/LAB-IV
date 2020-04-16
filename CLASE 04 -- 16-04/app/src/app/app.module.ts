import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CargarComponent } from './componentes/cargar/cargar.component';

// SERVICIO:
import { StorageService } from "../app/services/storage.service";
import { ListadoComponent } from './componentes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    CargarComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
