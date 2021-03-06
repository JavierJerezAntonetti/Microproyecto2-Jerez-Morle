import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/Pelicula';

@Component({
  selector: 'app-cadapelicula',
  templateUrl: './cadapelicula.component.html',
  styleUrls: ['./cadapelicula.component.scss']
})
export class CadapeliculaComponent implements OnInit {
  @Input() pelicula!:Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

  getid(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value)
  }

}
