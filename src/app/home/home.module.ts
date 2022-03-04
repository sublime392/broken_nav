import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Home2Component } from './home2.component';
import { Home3Component } from './home3.component';
@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule],
  declarations: [HomeComponent, Home2Component, Home3Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule { }
