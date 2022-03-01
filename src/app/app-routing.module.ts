import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./views/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./views/account/account.module').then((m) => m.AccountModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
