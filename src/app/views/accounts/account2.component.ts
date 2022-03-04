import { Component } from '@angular/core';

import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'account2',
  templateUrl: './account2.component.html',
  styleUrls: ['./account2.component.scss']
})
export class Account2Component {
  constructor(private router: RouterExtensions) {
  }

  goBack(): void {
    this.router.back();
  }
}
