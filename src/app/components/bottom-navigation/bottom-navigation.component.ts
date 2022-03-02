import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent implements OnInit {
  @Input() tabs: Array<any>;

  private selectedTab: string;

  constructor(
    private navigationService: RouterExtensions,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const allTabs = this.tabs.reduce((prev, curr, i) => {
      return {
        ...prev,
        [curr.tabName]: curr.tabRoute
      };
    }, {});

    this.navigationService.navigate(
      [{ outlets: allTabs }],
      {
        relativeTo: this.activatedRoute
      }
    );
  }

  onTabChange(event: any): void {
    if (!event) return;
    if (this.selectedTab === this.tabs[event?.newIndex]?.tabName) return;

    this.selectedTab = this.tabs[event.newIndex].tabName;

    this.navigationService.navigate(
      [{ outlets: { [this.tabs[event.newIndex].tabName]: this.tabs[event.newIndex].tabRoute } }],
      {
        relativeTo: this.activatedRoute
      }
    );
  }
}
