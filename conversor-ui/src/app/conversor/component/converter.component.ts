import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConversorModel } from '../model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm | undefined

  public resultado!: number;
  public optFrom: Array<string> = [];
  public optTo: Array<string> = [];
  public model: ConversorModel = new ConversorModel("", "", "", "");

  constructor(private httpclient: HttpClient) { }


  getOptionsFrom(): void {
    this.httpclient.get("http://localhost:3000/options")
      .subscribe((data: any) => {
        this.optFrom = data;
        console.log(data);
      })
  }

  getOptionsTo(): void {
    this.httpclient.get("http://localhost:3000/options")
      .subscribe((data: any) => {
        this.optTo = data;
        console.log(data);
      })
  }

  public postConvert(): void {

    this.httpclient.post("http://localhost:3000/converter", this.model)
      .subscribe((data: any) => {
        this.model.erro = data.erro;
        this.resultado = data.valor;
        console.log(data);
      })
  }

  ngOnInit(): void {
    this.getOptionsFrom();
    this.getOptionsTo();
  }
}
