import { Component, Injector } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  tabs = [
    {
      id: 'accounts',
      title: 'Accounts',
      enabled: true,
      tabName: 'accountsTab',
      tabRoute: ['accounts']
    },
    {
      id: 'magazine',
      title: 'Magazine',
      enabled: true,
      tabName: 'magazineTab',
      tabRoute: ['magazine']
    }
  ];

  constructor(injector: Injector) {
    this.tabs = this.tabs.filter((t) => t.enabled);
  }
}
