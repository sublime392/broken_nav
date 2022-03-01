import { ChangeDetectorRef, ComponentFactoryResolver, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Directive({
  selector: 'named-outlet',
  exportAs: 'outlet'
})
export class NamedOutletDirective implements OnInit, OnDestroy {
  @Input() private name: string;

  private outlet: RouterOutlet;

  constructor(
    private context: ChildrenOutletContexts,
    private resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.outlet = new RouterOutlet(this.context, this.vcRef, this.resolver, this.name, this.cdr);
  }

  ngOnDestroy(): void {
    this.outlet.ngOnDestroy();
  }
}
