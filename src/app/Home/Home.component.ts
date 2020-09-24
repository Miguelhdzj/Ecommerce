import { Component } from '@angular/core';
import { InventarioService } from '../Services/Inventario.service';
@Component({
    selector: 'Home',
    templateUrl: './Home.component.html',
})

export class HomeComponent {
    public lstProducto = [];
    constructor(
        private _productoService: InventarioService
    ) {
        this.lstProducto = this._productoService.lstElementos;
        console.log(this.lstProducto);
    }

    AgregarCarrito(){
        for(let i = 0; i < this.lstProducto.length; i ++){

        }

    }
    
}