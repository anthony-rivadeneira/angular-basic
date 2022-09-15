import { Component } from '@angular/core';

@Component({

    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',

})

export class HeroeComponent{
    nombre: string = "Ironman";
    edad: number = 40;

    get capitalizar(){
        return this.nombre.toUpperCase();
    }
    mostrarNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(){
        this.nombre = "Spiderman"
    }
    cambiarEdad(){
        this.edad =  25;
    }

}