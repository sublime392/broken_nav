import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from '@nativescript/core';
import { ModalDialogProvider } from '../modal/modal.service';

@Component({
  selector: 'Home3',
  templateUrl: './home3.component.html',
})
export class Home3Component implements OnInit, OnDestroy {
  @ViewChild('messageView', { static: false }) public messageView?: any;
  subscriptions = [];

  constructor(private modalProvider: ModalDialogProvider,
    private router: RouterExtensions,
    private route: ActivatedRoute) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  @HostListener('keydown.enter', ['$event']) onKey(event: KeyboardEvent) {
    console.log('keyboard down', event.key);

  }

  home2() {
    console.log('forgot tapped');
    this.router.navigate(['home2'], { relativeTo: this.route });
    // this.router.navigateByUrl('/home/home2', { clearHistory: false });
  }

  browse() {
    console.log('forgot tapped');
    // this.router.navigate(['recover'], { relativeTo: this.route });
    this.router.navigateByUrl('/browse', { clearHistory: true });
  }

  openSettings() {
    const context = {
      url: 'modal-settings',
      state: {
        // featurePath: 'user',
        title: 'settings',
        dismissable: true
      }
    };
    this.subscriptions.push(this.modalProvider.open(context).subscribe({
      next: response => {
        //         console.log('pin complete');
        // console.log(response);
        // this.selectedAccount = account.pivot.description;
        // this.form.get('account_id')?.reset(account.id);
        // this.userService.refreshUser();
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: any) => {
      subscription.unsubscribe();
    });
  }
}
