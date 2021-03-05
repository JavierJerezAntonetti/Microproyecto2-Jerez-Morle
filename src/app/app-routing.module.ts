import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ListapeliculasComponent} from './components/listapeliculas/listapeliculas.component'

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: '', component: ListapeliculasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
