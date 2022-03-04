import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'Browse3',
  templateUrl: './browse3.component.html',
})
export class Browse3Component implements OnInit {
  constructor(private router: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  goBack(): void {
    this.router.navigate(['/'], { clearHistory: true });
  }
}
