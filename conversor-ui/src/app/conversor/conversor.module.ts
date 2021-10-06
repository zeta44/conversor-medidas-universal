import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './component';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives';



@NgModule({
  declarations: [
    ConverterComponent,
    NumeroDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ConverterComponent
  ]
})
export class ConversorModule { }
