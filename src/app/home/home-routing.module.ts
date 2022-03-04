import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';
import { Home3Component } from './home3.component';
import { Home2Component } from './home2.component';
import { AllGuard } from '../all.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivateChild: [AllGuard],
    children: [
      {
        path: 'home2',
        component: Home2Component
      },
      {
        path: '',
        component: Home3Component
      }
    ]
  },

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule { }
