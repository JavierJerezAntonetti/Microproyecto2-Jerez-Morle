import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pelicula } from '../../models/Pelicula';

@Component({
  selector: 'app-listapeliculas',
  templateUrl: './listapeliculas.component.html',
  styleUrls: ['./listapeliculas.component.scss']
})
export class ListapeliculasComponent implements OnInit {
  listapeliculas!:Pelicula[];
  
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getPeliculas().subscribe(listapeliculas => {
      this.listapeliculas = listapeliculas["results"];
      console.log(listapeliculas)
    });
  }
}