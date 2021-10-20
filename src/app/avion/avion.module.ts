import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvionRoutingModule} from "./avion-routing.module";

import {BuscarComponent} from './page/buscar/buscar.component';
import {AgregarComponent} from './page/agregar/agregar.component';
import {AvionViewComponent} from './page/avion-view/avion-view.component';
import {HomeComponent} from './page/home/home.component';
import {ListaComponent} from './page/lista/lista.component';


@NgModule({
  declarations: [
    BuscarComponent,
    AgregarComponent,
    AvionViewComponent,
    HomeComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    AvionRoutingModule
  ]
})
export class AvioModule {
}
