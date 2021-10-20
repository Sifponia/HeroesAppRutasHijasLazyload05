import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {RegistroComponent} from "./page/registro/registro.component";
import {HomeComponent} from "../avion/page/home/home.component";

const router: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: '', children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegistroComponent},
      {path: '**', redirectTo: 'login'}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class AutRoutingModule {
}
