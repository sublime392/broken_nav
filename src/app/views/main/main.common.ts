import { NSEmptyOutletComponent } from '@nativescript/angular';

import { MainComponent } from './main.component';

export const routes = [
  {
    path: 'default',
    component: MainComponent,
    children: [
      {
        path: 'accounts',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('../accounts/accounts.module').then((m) => m.AccountsModule),
        outlet: 'accountsTab'
      },
      {
        path: 'magazine',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('../magazine/magazine.module').then((m) => m.MagazineModule),
        outlet: 'magazineTab'
      }
    ]
  }
];
