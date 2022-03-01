import { Component, Injector } from '@angular/core';

import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  constructor(injector: Injector, private router: RouterExtensions) {}

  navigateToDetails(): void {
    this.router.navigate(['../', 'account']);
  }
}
