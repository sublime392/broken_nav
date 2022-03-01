import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptRouterModule } from '@nativescript/angular';

import { routes } from './accounts.common';
import { AccountsComponent } from './accounts.component';

@NgModule({
  declarations: [AccountsComponent],
  imports: [CommonModule, NativeScriptRouterModule.forChild(routes)],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AccountsModule {}
