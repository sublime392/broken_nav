// import { BrowseModule } from './browse/browse.module';
// import { HomeModule } from './home/home.module';
import { AllGuard } from './all.guard';
import { ModalModule } from './modal/modal.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule, NativeScriptUISideDrawerModule, ModalModule,
    // HomeModule, BrowseModule
  ],
  declarations: [AppComponent],
  providers: [AllGuard],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
