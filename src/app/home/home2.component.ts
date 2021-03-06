import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'Home2',
  templateUrl: './home2.component.html',
})
export class Home2Component implements OnInit {
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
    this.router.back();
    // this.router.navigate(['/home'], { clearHistory: true });
  }
}
