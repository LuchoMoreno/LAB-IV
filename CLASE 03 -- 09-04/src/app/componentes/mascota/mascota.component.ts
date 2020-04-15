import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../Clases/Mascota/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {


// INPUT DE TIPO MASCOTA.
@Input() mascota : Mascota;

// BOOLEANO CON DETALLES.
detalles : boolean = false;


constructor() { }

  ngOnInit(): void {
  }

public mostrarDetalles(event) 
{
  this.detalles = true;
}

}
