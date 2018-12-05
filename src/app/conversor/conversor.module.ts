import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './conversor/conversor.component';
import {MoedaService,ConversorService} from './services'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConversorComponent
  ]
  ,exports:[
    ConversorComponent
  ],
  providers:[
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
