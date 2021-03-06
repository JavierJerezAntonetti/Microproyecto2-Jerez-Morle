import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/Pelicula';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cadapelicula',
  templateUrl: './cadapelicula.component.html',
  styleUrls: ['./cadapelicula.component.scss']
})
export class CadapeliculaComponent implements OnInit {
  @Input() pelicula!:Pelicula;
  listapeliculas!:Pelicula[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  getid(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
    this.ngOnInitdetalle(value)
  }

  ngOnInitdetalle(valor:number): void {
    this.apiService.getDetalles(valor).subscribe(listapeliculas => {
      this.listapeliculas = listapeliculas;
      console.log(listapeliculas)
    });
  }
}
