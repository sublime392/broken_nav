import { Component } from '@angular/core';

import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  constructor(private router: RouterExtensions) {
  }

  goBack(): void {
    this.router.back();
  }
}
