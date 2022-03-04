import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { BrowseComponent } from './browse.component';
import { Browse2Component } from './browse2.component';
import { Browse3Component } from './browse3.component';

const routes: Routes = [
  {
    path: 'browse',
    component: BrowseComponent,
    children: [
      {
        path: 'browse2',
        component: Browse2Component
      },
      {
        path: '',
        component: Browse3Component
      }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BrowseRoutingModule { }
