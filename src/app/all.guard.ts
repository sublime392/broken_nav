import { combineLatest, Observable, of, timer } from 'rxjs';
import { Injectable, Inject, NgZone } from '@angular/core';
import { Location } from '@angular/common';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  ActivatedRoute
} from '@angular/router';
import {
  tap, filter, take, takeWhile,
  shareReplay, distinctUntilChanged,
  map, mergeMap
} from 'rxjs/operators';

@Injectable()
export class AllGuard implements CanActivate, CanActivateChild {
  private combined: Observable<[boolean, boolean]>;

  constructor(
    private location: Location,
    private ngZone: NgZone,
    private route: ActivatedRoute
  ) {
    this.combined = combineLatest([
      of(true).pipe(take(1)),
      of(true).pipe(take(1))
    ]);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const url: string = state.url;


    return of(true);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(route, state);
  }


}
