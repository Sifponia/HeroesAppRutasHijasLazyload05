import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListaComponent} from "./page/lista/lista.component";
import {AgregarComponent} from './page/agregar/agregar.component';
import {BuscarComponent} from "./page/buscar/buscar.component";
import {AvionViewComponent} from './page/avion-view/avion-view.component';
import {HomeComponent} from "./page/home/home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'listado', component: ListaComponent},
      {path: 'agregar', component: AgregarComponent},
      {path: 'editar/:id', component: AgregarComponent},
      {path: 'buscar', component: BuscarComponent},
      {path: ':id', component: AvionViewComponent},
      {path: '**', redirectTo: 'listado'},


    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AvionRoutingModule {
}
