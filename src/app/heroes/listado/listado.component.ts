import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes:string[] = ["hulk","spiderman","capitan","thor","pantera"];
  heroesBorrado:string[] =[];
  borrado:string = "";

  borrarHeroe(){
     this.borrado = this.heroes.shift() || '';

    this.heroesBorrado.push(this.borrado);
   
  }


}
