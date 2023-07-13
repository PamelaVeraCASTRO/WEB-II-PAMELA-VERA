import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdiomaComponent } from './idioma/idioma.component';
import { PalabraComponent } from './palabra/palabra.component';

const routes: Routes = [
  {path:"idioma", component:IdiomaComponent},
  {path:"palabra",component:PalabraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
