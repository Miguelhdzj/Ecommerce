import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing.module'

import { HomeComponent } from './Home/Home.component'
import { ComprasComponent } from './Compras/Compras.component'
import { AltaProductoComponent } from './AltaProducto/AltaProducto.component';
import { InventarioService } from './Services/Inventario.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table' ;
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComprasComponent,
    AltaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    routing,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule
    
  ],
  exports: [ MatFormFieldModule, MatInputModule ],
  providers: [appRoutingProviders,InventarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
