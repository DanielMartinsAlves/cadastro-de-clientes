import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { FichaClienteComponent } from './ficha-cliente/ficha-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';
import { PadraoModule } from '../padrao/padrao.module';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    PadraoModule
  ],
  declarations: [BuscarClienteComponent, FichaClienteComponent, EditarClienteComponent, BuscarCepComponent]
})
export class ClienteModule { }
