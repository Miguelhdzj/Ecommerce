import { Injectable } from '@angular/core';

@Injectable()

export class InventarioService{
   // public NombreProducto: '';
    public lstElementos = [];

    altaInventario(producto: any = {} ):Array<string>{
        this.lstElementos.push(producto);
        return this.obtenProducto();
    }

    obtenProducto(){
        return this.lstElementos;
    }

}