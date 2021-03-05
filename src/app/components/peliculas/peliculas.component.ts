import { Component, OnInit } from '@angular/core';
import { Pelicula } from './peliculas';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  pelicula: Pelicula = {
    title: 'Titanic',
    language: 'English',
    popularity: '4.5',
    poster_path: '',
  };

  constructor() { 
  }

  ngOnInit(): void {
  }


}
