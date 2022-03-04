import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptCommonModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptUISideDrawerModule, NativeScriptCommonModule],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
