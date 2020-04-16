import { Component, OnInit } from '@angular/core';
import { Persona } from '../../clases/persona/persona'
//import { StorageService } from 'src/app/services/storage.service';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listado : Array<Persona>;

  constructor(private storage : StorageService) { }

  ngOnInit(): void {
    this.listado = this.storage.traerPersonas();
  }

}
