import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.scss']
})
export class PeliculaDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }

  
}
