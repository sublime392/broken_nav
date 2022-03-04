import { Component } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from '@nativescript/angular';
import { Application } from '@nativescript/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(router: RouterExtensions) {
    router.navigate(['/accounts']);
  }

  public closeDrawer(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.closeDrawer();
  }
}
