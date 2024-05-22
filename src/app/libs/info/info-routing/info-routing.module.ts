import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Info1Component } from '../info1/info1.component';
import { Info2Component } from '../info2/info2.component';
import { Info3Component } from '../info3/info3.component';
import { Info4Component } from '../info4/info4.component';

const routes: Routes = [
  {
    path: '',
    component: Info1Component,
  },
  {
    path: 'info2',
    component: Info2Component,
  },
  {
    path: 'info3',
    component: Info3Component,
  },
  {
    path: 'info4',
    component: Info4Component,
  },
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
