import { Account2Component } from './account2.component';
import { Routes } from '@angular/router';

import { AccountsComponent } from './accounts.component';
import { AccountComponent } from './account.component';

export const routes: Routes = [
  {
    path: '',

    component: AccountsComponent,
    children: [
      {
        path: 'account2',
        component: Account2Component
      },
      {
        path: '',
        component: AccountComponent
      }
    ]

  }
];
