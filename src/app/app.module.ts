import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/components/app/app.component';
import { PeliculasComponent } from '../app/components/peliculas/peliculas.component';
import { ListapeliculasComponent } from './components/listapeliculas/listapeliculas.component';
import { CadapeliculaComponent } from './components/cadapelicula/cadapelicula.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { PeliculaDetailComponent } from './components/pelicula-detail/pelicula-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    ListapeliculasComponent,
    CadapeliculaComponent,
    HomeComponent,
    NavbarHomeComponent,
    PeliculaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
