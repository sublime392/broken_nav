import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { Browse2Component } from './browse2.component';
import { Browse3Component } from './browse3.component';

@NgModule({
  imports: [NativeScriptCommonModule, BrowseRoutingModule],
  declarations: [BrowseComponent, Browse3Component, Browse2Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule { }
