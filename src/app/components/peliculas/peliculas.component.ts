import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pelicula } from 'src/app/models/Pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  listapeliculas!:Pelicula[];
  
  constructor(private apiService:ApiService) { 
  }

  ngOnInit(): void {
    this.apiService.getPeliculas(1).subscribe(listapeliculas => {
      this.listapeliculas = listapeliculas["results"];
      console.log(listapeliculas)
    });
  }

}
