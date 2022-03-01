import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { BottomNavigationModule } from '../../components/bottom-navigation/bottom-navigation.module';

import { routes } from './main.common';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes), BottomNavigationModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MainModule {}
