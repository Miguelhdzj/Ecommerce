import { Component } from '@angular/core';
import { Producto } from '../models/Producto';
import { InventarioService } from '../Services/Inventario.service';

@Component({
    selector: 'AltaProducto',
    templateUrl: './AltaProducto.component.html',
    styleUrls: ['./AltaProducto.css'],
})
export class AltaProductoComponent {

    articulos: Producto[] = new Array();
    nuevoElemento: any = {};

    constructor(
        private _productoService: InventarioService
    ) {

    }

    AgregarElemento() {
        this.articulos.push(this.nuevoElemento);
        this.nuevoElemento = {};
        this._productoService.lstElementos = this.articulos;
    }
    EliminarElemento(index: number){
        this.articulos.splice(index,1);
    }


}
