import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptRouterModule, NativeScriptCommonModule } from '@nativescript/angular';

import { routes } from './accounts.common';
import { AccountsComponent } from './accounts.component';
import { Account2Component } from './account2.component';

@NgModule({
  declarations: [AccountsComponent, AccountComponent, Account2Component],
  imports: [CommonModule, NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AccountsModule { }
