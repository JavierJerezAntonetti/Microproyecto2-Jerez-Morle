import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/components/app/app.component';
import { ListapeliculasComponent } from './components/listapeliculas/listapeliculas.component';
import { CadapeliculaComponent } from './components/cadapelicula/cadapelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    ListapeliculasComponent,
    CadapeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
