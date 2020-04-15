export class Mascota {

    nombre : string;
    tipo : string;
    imagen : string;
    color : string;
    
    constructor(nombre, imagen, tipo){
    
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipo;
        this.switchColor();
    }

    public switchColor()
    {
        switch(this.tipo)
        {
          case "Perro":
            this.color = "color:green"
            break;
          case "Gato":
            this.color = "color:red"
            break;
          case "Pez":
            this.color = "color:blue"
            break;
        }
      }

    }
    