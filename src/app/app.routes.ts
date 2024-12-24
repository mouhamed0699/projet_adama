import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AchatComponent } from './achat/achat.component';
import { PretComponent } from './pret/pret.component';
import { PartenariatComponent } from './partenariat/partenariat.component';
import { AppComponent } from './app.component';
import { RHComponent } from './rh/rh.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


export const routes: Routes = [
    {path:'contrats-client',component:ClientComponent},
    {path:'contrats-achat',component:AchatComponent},
    {path:'contrats-rh',component:RHComponent},
    {path:'contrats-pret',component:PretComponent},
    {path:'contrats-partenariat',component:PartenariatComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
  
  export class AppRoutingModule { }