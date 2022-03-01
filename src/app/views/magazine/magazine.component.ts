import { Component, Injector } from '@angular/core';

@Component({
  selector: 'magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent {
  constructor(injector: Injector) {}
}
