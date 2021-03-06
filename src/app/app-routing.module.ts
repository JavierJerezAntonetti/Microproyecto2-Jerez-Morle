import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListapeliculasComponent } from './components/listapeliculas/listapeliculas.component'
import { LoginComponent } from './components/login/login.component';
import { PeliculaDetailComponent } from './components/pelicula-detail/pelicula-detail.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'listado-peliculas', component: ListapeliculasComponent},
  { path: 'detail', component: PeliculaDetailComponent },
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
