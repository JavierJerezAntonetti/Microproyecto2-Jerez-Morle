import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  peliculasUrl:string = 'https://api.themoviedb.org/3/discover/movie?api_key=48eb1c846149166ad1387928d6f75022&include_adult=false&include_video=false&page=';
  pornombreUrl:string = 'https://api.themoviedb.org/3/search/movie?api_key=48eb1c846149166ad1387928d6f75022&query='
  detalleUrl:string = 'https://api.themoviedb.org/3/movie/587807'
  api_key:string = '?api_key=48eb1c846149166ad1387928d6f75022'

  constructor(private http:HttpClient) { }

  getPeliculas(page:number):Observable<any> {
    return this.http.get<any>(this.peliculasUrl+page);
  }

  getPeliculaspornombre(nombre:string):Observable<any> {
    return this.http.get<any>(this.pornombreUrl+nombre);
  }

  getDetalles(id:number):Observable<any> {
    return this.http.get<any>(this.detalleUrl+id+this.api_key);
  }
}