import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pelicula } from '../models/Pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  peliculasUrl:string = 'https://api.themoviedb.org/3/discover/movie?api_key=48eb1c846149166ad1387928d6f75022&include_adult=false&include_video=false&page=';

  constructor(private http:HttpClient) { }

  getPeliculas(page:number):Observable<any> {
    return this.http.get<any>(this.peliculasUrl+page);
  }
  
}