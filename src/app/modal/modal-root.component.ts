import { ActivatedRoute, ActivationStart, RouterOutlet } from '@angular/router';
import { Component, OnInit, Inject, NgZone, OnDestroy, Injector, ViewChild } from '@angular/core';
import { ModalDialogParams, RouterExtensions } from '@nativescript/angular';
import { timer, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ModalDialogProvider } from './modal.service';
// import { Page, NavigatedData } from '@nativescript/core';

@Component({
  selector: 'cbs-modal-root',
  templateUrl: 'modal-root.component.html'
  // styleUrls: ['modal-root.component.scss']
})
export class ModalRootComponent implements OnInit, OnDestroy {
  @ViewChild(RouterOutlet, { static: false }) outlet?: RouterOutlet;
  private context: any;
  private modalService?: ModalDialogProvider;
  private subscriptions: Subscription[] = [];

  constructor(
    private params: ModalDialogParams,
    private _routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
    // private page: Page,
    private injector: Injector,
    private ngZone: NgZone,
    // private modalService: ModalDialogProvider
  ) { }



  ngOnInit() {
    this.subscriptions.push(
      this._routerExtensions.router.events.subscribe(e => {
        if (e instanceof ActivationStart && e.snapshot.outlet === 'modal') {
          console.log('modal root deactivate on nav start');
          this.outlet?.deactivate();
        }

      })
    );
    // console.log('open modal root');
    // console.log(this.activeRoute);
    this.context = this.params.context;
    // console.log(this.params);
    // console.log(this.context);
    // this.ngZone.run(() => {
    this._routerExtensions.navigate([{ outlets: { modal: [this.context.url] } }], {
      relativeTo: this.activeRoute,
      state: this.context.state
    });
    // });
    // this.page.on('navigatingFrom', this.ngOnDestroy);
  }

  onClose() {
    console.log('modal root ONCLOSE callback emitting');
    this.params.closeCallback('prova');
  }

  onActivate(componentReference: any) {
    // console.log('activated');
    // console.log(componentReference)
    this.getModalService().addDialog(this.params);
    // Below will subscribe to the searchItem emitter
    componentReference.responseEmitter().pipe(take(1)).subscribe((data: any) => {
      // console.log('response emitted:');
      // console.log(data);
      // timer(1).subscribe(val => {
      // console.log('modal root close callback emitting');
      this.outlet?.deactivate();
      this.params.closeCallback(data, this.context.url);
      // });

    });
  }

  ngOnDestroy() {
    console.log('Modal root destroy');




    this._routerExtensions.navigate([{ outlets: { modal: null } }], { relativeTo: this.activeRoute }).finally(() => {
      console.log('route after modal destroy complete');
      this.outlet?.deactivate();
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    });

  }

  private getModalService(): ModalDialogProvider {
    if (!this.modalService) {
      this.modalService = this.injector.get(ModalDialogProvider);
    }
    return this.modalService;
  }
}
