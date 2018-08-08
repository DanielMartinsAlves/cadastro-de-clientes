import { Injectable } from '@angular/core';
import { ClienteModule } from './cliente.module';
import { RequisicoesService } from '../padrao/servicos/requisicoes.service';
import { Cliente } from './cliente';

@Injectable({
  providedIn: ClienteModule
})
export class ClienteService {

  constructor(private requisicoes: RequisicoesService) { }
 
  consultarClientes(filtro = null){
    return this.requisicoes.consultar("",null);
  }
  
  adicionarCliente(cliente: Cliente){
    return this.requisicoes.adicionar<Cliente>("",cliente);
  }
}
