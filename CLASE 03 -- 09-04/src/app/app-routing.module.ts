import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';
import { CargaMascotaComponent } from './componentes/carga-mascota/carga-mascota.component';


const routes: Routes = [

  {
    path: 'listado',
    component : ListadoComponent,
  },

  {
    path: 'detalle',
    component : MascotaComponent,
  },
  
  {
    path: 'carga',
    component : CargaMascotaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
