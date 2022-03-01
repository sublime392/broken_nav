import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptRouterModule } from '@nativescript/angular';

import { routes } from './account.common';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, NativeScriptRouterModule.forChild(routes)],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AccountModule {}
