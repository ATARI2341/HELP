import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './materias/materias/materias.component';
import { PrecentacionComponent } from './precentacion/precentacion.component';
import { RevistaComponent } from './revista/revista.component';
const routes: Routes = [
  {path:'',component:PrecentacionComponent} ,
  {path:'revista', component:RevistaComponent},
  {path:'materias', component:MateriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
