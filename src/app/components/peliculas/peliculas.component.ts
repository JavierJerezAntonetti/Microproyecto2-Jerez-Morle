import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pelicula } from '../../models/Pelicula';

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
    this.apiService.getPeliculas().subscribe(listapeliculas => {
      this.listapeliculas = listapeliculas["results"];
      console.log(listapeliculas)
    });
  }


}
