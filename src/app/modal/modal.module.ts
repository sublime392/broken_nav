import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ModalRootComponent } from './modal-root.component';
import { ModalRoutingModule } from './modal-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [NativeScriptCommonModule, ModalRoutingModule],
  declarations: [ModalRootComponent, SettingsComponent],
  entryComponents: [ModalRootComponent, SettingsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ModalModule { }
