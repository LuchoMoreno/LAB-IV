import { Injectable } from '@angular/core';
import { Persona } from '../clases/persona/persona'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  key = "personas";

  public listado: Array<Persona> = [];

  constructor() { }


public guardarPersona(persona : Persona) : boolean
{
  let personas = this.traerPersonas();
  personas.push(persona);

  localStorage.setItem(this.key, JSON.stringify(personas))
return true;
}


public traerPersonas() : Array<Persona>
{

  try {
    
    let personasTraidas = localStorage.getItem(this.key)
      
      if (!personasTraidas)
      {
        return [];
      }

      let listaPersonas = JSON.parse(personasTraidas);

      this.listado = listaPersonas;

      return listaPersonas;

  } catch (error) {

    return [];
    
  }
  


}

}
