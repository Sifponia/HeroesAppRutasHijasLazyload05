import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {Error404Component} from './shared/error404/error404.component';
import {HomeComponent} from "./avion/page/home/home.component";

const routes: Routes = [

  {
    path: 'auth', loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'avion', loadChildren: () => import ('./avion/avion.module').then(a => a.AvioModule)
  },
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '404'}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
