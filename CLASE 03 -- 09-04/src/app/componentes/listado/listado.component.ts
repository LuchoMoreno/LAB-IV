import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Mascota } from '../../Clases/Mascota/mascota';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

// OUTPUT DETALLE.
@Output() detalles = new EventEmitter<any>();

// INPUT DE MASCOTA.
@Input() mascota: Mascota;


  constructor() { }

  ngOnInit(): void {
  }

  clickDetalles() {
    this.detalles.emit();
  }

}
