import { Injectable, ViewContainerRef, EventEmitter, NgZone } from '@angular/core';
import {
  ModalDialogService,
  ModalDialogOptions,
  ModalDialogParams
} from '@nativescript/angular';
// import { ModalFormComponent } from './modalForm.component';
// import { Measurement } from '../model';
import { Observable, from, Subject, timer, Subscription } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { ModalRootComponent } from './modal-root.component';

export interface EmitResponse {
  responseEmitter(): EventEmitter<any>;
}

@Injectable({
  providedIn: 'root'
})
export class ModalDialogProvider {
  private _vcRef?: ViewContainerRef;
  private openDialogs: ModalDialogParams[] = [];
  private queuedDialogs: { dialogConfig: ModalDialogOptions, subject: Subject<string>; }[] = [];
  private timerSubscription?: Subscription;
  // private cleared = false;

  constructor(private _modalService: ModalDialogService,
    private ngZone: NgZone) {
    this.startDialogOpener();
  }

  set viewContainerRef(viewContainerRef: ViewContainerRef | any) {
    this._vcRef = viewContainerRef;
  }

  get viewContainerRef(): ViewContainerRef | any {
    return this._vcRef;
  }

  hasOpenDialog() {
    return this.openDialogs.length > 0 || this.queuedDialogs.length > 0;
  }

  open(context: any): Observable<any> {
    // console.log('open modal', context.url);
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      fullscreen: true,
      context
    };

    const dialogResponse = new Subject<string>();
    this.queuedDialogs.push(
      { dialogConfig: options, subject: dialogResponse }
    );
    // console.log('queued ');
    // this.queuedDialogs.map(dialog => console.log(dialog.dialogConfig.context));


    // if (this.queuedDialogs.length === 1) {
    //   // console.log('immediate open dialog');
    //   timer(1000).subscribe({
    //     next: () => {
    //       this.openQueuedDialog();
    //     }

    //   });
    // }

    return dialogResponse;
  }



  addDialog(dialog: ModalDialogParams): void {

    this.openDialogs.push(dialog);
  }

  closeAll(): void {
    // console.log('modal service close all');
    this.queuedDialogs = [];


    this.openDialogs.forEach((dialog, index) => {
      try {

        dialog.closeCallback('');
        // this.openDialogs.splice(index, 1);
        // console.log('closed', dialog.context);
      } catch (e) {
        console.log('error when closing');
        console.log(e);
      }


      // this.openDialogs.shift();
    });
    // this.openDialogs = [];
  }

  private stopDialogOpener() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();

    }
    this.timerSubscription = undefined;
  }

  private startDialogOpener() {
    this.stopDialogOpener();

    this.timerSubscription = timer(1000, 1000).pipe(
      //
    ).subscribe({
      next: () => {
        // console.log('timer tick', this.openDialogs.length, this.queuedDialogs.length);
        if (this.openDialogs.length === 0) {
          const queuedDialog = this.queuedDialogs.shift();
          if (queuedDialog) {
            this.openQueuedDialog(queuedDialog);
          }

        }
      }
    });
  }

  private openQueuedDialog(dialog: { dialogConfig: ModalDialogOptions, subject: Subject<string>; }): void {
    // console.log(this.queuedDialogs);
    // console.log('openining queued', this.queuedDialogs);
    // console.log('open queued ');
    // this.queuedDialogs.map(dialog => console.log(dialog.dialogConfig.context));
    // if (!this.queuedDialogs.length) {
    //   return;
    // }
    // const queuedDialog = this.queuedDialogs[0];
    // if (!queuedDialog) {
    //   return;
    // }

    // this.cleared = false;
    this.stopDialogOpener();

    const dialogResponse = from(this._modalService.showModal(ModalRootComponent, dialog.dialogConfig)).pipe(
      tap(_ => {
        // console.log('removing open dialog', dialog.dialogConfig.context.url);
        let dialogSearchKey = dialog.dialogConfig.context.url;
        if (dialogSearchKey === 'modal-web-view') {
          dialogSearchKey += dialog.dialogConfig.context.state.featurePath;
        }
        this.openDialogs = this.openDialogs.reduce(
          (acc: ModalDialogParams[], openDialog: ModalDialogParams) => {
            let dialogKey = openDialog.context.url;
            if (dialogKey === 'modal-web-view') {
              dialogKey += openDialog.context.state.featurePath;
            }
            if (dialogKey !== dialogSearchKey) {
              acc.push(openDialog);
            }
            return acc;
          }, []);

        // this.openDialogs.shift();
        // console.log('opening next dialog');
        // if (this.cleared) {
        //   return;
        // }

        // this.queuedDialogs.shift();
        // timer(1000).subscribe({
        //   next: val => {
        //     // console.log('inner timer timed');
        //     this.openQueuedDialog();
        //   }
        // });
        this.startDialogOpener();
      }),
      take(1)
    );
    dialogResponse.subscribe(dialog.subject);
  }
}
