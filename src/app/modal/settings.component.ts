import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject, NgZone, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ModalDialogParams, RouterExtensions } from '@nativescript/angular';
import { Observable, Subject, combineLatest as combineLatestStatic, defer, from, Subscription } from 'rxjs';
import { take, filter, combineLatest, startWith, map, distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'cbs-tns-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  @Output() response: EventEmitter<any> = new EventEmitter<any>();

  private subscriptions: Subscription[] = [];
  // private fingerprintAuth: FingerprintAuth;

  constructor(
    private params: ModalDialogParams,
    private _routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
    //  private modalService2: ModalDialogProvider,

  ) {
    // tap(_ => console.log(_))
    // this.availableBiometrics = of(false);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());

  }

  ngOnInit() {

    // this.subscriptions.push(
    //   this.disclosuresStream.subscribe({
    //     next: val => {
    //       this.disclosures = val;
    //     }
    //   })
    // );


  }


  responseEmitter(): EventEmitter<any> {
    return this.response;
  }

  public onCancel(): void {
    // console.log('click close modal settings');
    this.response.emit('cancel');
  }


}
