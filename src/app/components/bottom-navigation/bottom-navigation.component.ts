import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Color, isIOS, Page } from '@nativescript/core';

import { RouterExtensions } from '@nativescript/angular';

declare const UITabBarAppearance;

@Component({
  selector: 'bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent implements OnInit {
  @Input() tabs: Array<any>;
  @Input() backgroundColor: string;

  private selectedTab: string;

  constructor(
    private page: Page,
    private navigationService: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private ngZone: NgZone,
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

    this.ngZone.run(() => {
      this.navigationService.navigate(
        [{ outlets: { [this.tabs[event.newIndex].tabName]: this.tabs[event.newIndex].tabRoute } }],
        {
          relativeTo: this.activatedRoute
        }
      );
    });
  }

  onNavigationLoaded(event): void {
    if (!event.object) return;

    if (isIOS) {
      const appearance = UITabBarAppearance.new();
      appearance.backgroundColor = new Color(this.backgroundColor || this.defaultBackgroundColor).ios;

      if (event?.object?.ios?.tabBar) {
        event.object.ios.tabBar.standardAppearance = appearance;
        event.object.ios.tabBar.scrollEdgeAppearance = appearance;
      }
    }
  }
}
