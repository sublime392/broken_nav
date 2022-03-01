import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from '@nativescript/angular';

import { NativeScriptMaterialBottomNavigationModule } from "@nativescript-community/ui-material-bottom-navigation/angular";

import { NamedOutletDirective } from '../../directives/named-outlet.directive';

import { BottomNavigationComponent } from './bottom-navigation.component';

@NgModule({
  declarations: [BottomNavigationComponent, NamedOutletDirective],
  imports: [CommonModule, NativeScriptCommonModule, NativeScriptMaterialBottomNavigationModule],
  exports: [BottomNavigationComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BottomNavigationModule {}
