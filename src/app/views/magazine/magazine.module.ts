import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptRouterModule, NativeScriptCommonModule } from '@nativescript/angular';


import { routes } from './magazine.common';
import { MagazineComponent } from './magazine.component';

@NgModule({
  declarations: [MagazineComponent],
  imports: [CommonModule, NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MagazineModule { }
