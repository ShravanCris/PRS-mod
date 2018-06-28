import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConcCardComponent } from './conc-card/conc-card.component';
import { HandicapComponent } from './handicap/handicap.component';
import {JournalistComponent } from './journalist/journalist.component';
const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'conc-card',
  component: ConcCardComponent
},
{
  path: 'Handicap',
  component:HandicapComponent
},
{
  path:'Journalist',
  component:JournalistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
