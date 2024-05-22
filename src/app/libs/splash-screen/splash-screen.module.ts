import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { SplashRoutingModule } from './splash-routing.module';

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule,
    SplashRoutingModule
  ],
  exports: [SplashScreenComponent]
})
export class SplashScreenModule { }