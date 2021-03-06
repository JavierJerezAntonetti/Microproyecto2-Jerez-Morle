import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Pelicula } from '../../models/Pelicula';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-listapeliculas',
  templateUrl: './listapeliculas.component.html',
  styleUrls: ['./listapeliculas.component.scss']
})
export class ListapeliculasComponent implements OnInit {
  listapeliculas!:Pelicula[];
  
  constructor(private apiService:ApiService) { }

  page = 2;
  nombre = "";
  id = 0;

  sum(){
    if (this.page<501) {
    this.page = this.page+1;
    this.ngOnInit()
    }
  }

  res(){
    if (this.page>0) {
    this.page = this.page-1;
    this.ngOnInit()
    }
  }

  @ViewChild('nombrenuevo') nombrenuevo!:ElementRef;
  
  getnombrenuevo(){
    this.nombre = this.nombrenuevo.nativeElement.value;
    this.ngOnInitpornombre()
  }

  ngOnInit(): void {
    this.apiService.getPeliculas(this.page).subscribe(listapeliculas => {
      this.listapeliculas = listapeliculas["results"];
      console.log(listapeliculas)
    });
  }

  ngOnInitpornombre(): void {
    this.apiService.getPeliculaspornombre(this.nombre).subscribe(listapeliculas => {
      this.listapeliculas = listapeliculas["results"];
      console.log(listapeliculas)
    });
  }
  
  ngOnInitdetalle(): void {
    this.apiService.getDetalles(this.id).subscribe(listapeliculas => {
      this.listapeliculas = listapeliculas["results"];
      console.log(listapeliculas)
    });
  }
}