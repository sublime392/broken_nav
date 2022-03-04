import { MagazineComponent } from './views/magazine/magazine.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
  {
    path: 'magazine',
    loadChildren: () => import('./views/magazine/magazine.module').then((m) => m.MagazineModule),
  },
  {
    path: 'accounts',
    loadChildren: () => import('./views/accounts/accounts.module').then((m) => m.AccountsModule),
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
