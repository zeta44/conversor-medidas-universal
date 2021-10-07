import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConversorModel } from '..';

type AnyFunction = (n: any) => void;


@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private urlApi:string = "http://localhost:3000"

  constructor(private httpclient: HttpClient) { }

  getOptions(callback:AnyFunction, option:string): void {
    this.httpclient.get(`${this.urlApi}/options?from=${option}`)
      .subscribe(callback)
  }

  public postConvert(model:ConversorModel, callback:AnyFunction): void {

    this.httpclient.post(`${this.urlApi}/converter`, model)
      .subscribe(callback)
  }

}
