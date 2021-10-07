import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './component';
import { NumeroDirective } from './directives';
import { ConversorService } from './service';



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
  ],
  providers:[
    ConversorService
  ]
})
export class ConversorModule { }
