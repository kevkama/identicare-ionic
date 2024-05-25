import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing/info-routing.module';
import { Info1Component } from './info1/info1.component';
import { Info2Component } from './info2/info2.component';
import { Info3Component } from './info3/info3.component';
import { Info4Component } from './info4/info4.component';



@NgModule({
  declarations: [Info1Component, Info2Component, Info3Component, Info4Component],
  imports: [
    CommonModule,
    InfoRoutingModule,
    
  ]
})
export class InfoModule { }
