import { Component, OnInit } from '@angular/core';
import { Persona } from '../../clases/persona/persona'
import { StorageService } from '../../services/storage.service'

// INCLUIR SERVICIO


@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {

public persona : Persona;
public nombre : string = "Juan";
public apellido : string = "Perez";



  constructor(private storage : StorageService) { }

  ngOnInit(): void {
  }

  public cargar(){

    this.persona = new Persona(this.nombre, this.apellido);
    console.log(this.persona);
    this.storage.guardarPersona(this.persona);
    
  }



}
