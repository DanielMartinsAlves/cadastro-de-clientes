import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';

const routes: Routes = [
  {
    path: 'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
