import { Component, OnInit, ViewChild } from '@angular/core';
import { ConversorModel } from '../model';
import { NgForm } from '@angular/forms';
import { ConversorService } from '../service';

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

  constructor(private conversorService: ConversorService) { }

  public onChange($event:any){
    let callbak = (data: any) => {
      this.optTo = data;
      console.log(data);
    }
    this.conversorService.getOptions(callbak, this.model.unid_origem)
  }

  getOptionsFrom(): void {
    let callbak = (data: any) => {
      this.optFrom = data;
      console.log(data);
    }
    this.conversorService.getOptions(callbak, "")
  } 

  public postConvert(): void {
    let callback = (data: any) => {
      this.model.erro = data.erro;
      this.resultado = data.valor;
      console.log(data);
    }
    this.conversorService.postConvert(this.model, callback)
  }

  ngOnInit(): void {
    this.getOptionsFrom();
  }
}
