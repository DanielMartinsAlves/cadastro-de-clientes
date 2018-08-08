
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PadraoModule } from '../padrao.module';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json;charset=UTF-8'
   })
 };

 @Injectable({
  providedIn: PadraoModule
})
export class RequisicoesService {

  private urlContexto: string;

  constructor(private clienteHTTP: HttpClient) {
  }

  consultar(url: string, parametrosDePesquisa: object,  httpOpt = httpOptions): Observable<any> {

    return this.clienteHTTP.get(url+"?"+parametrosDePesquisa, httpOpt);
  }

  adicionar<T>(url: string, objeto: T, httpOpt = httpOptions): Observable<any> {
    return this.clienteHTTP.post(url, objeto, httpOpt);
  }

  alterar<T>(url: string, objeto: T, httpOpt = httpOptions): Observable<any> {
  return this.clienteHTTP.put(url, objeto, httpOpt);
  }
}