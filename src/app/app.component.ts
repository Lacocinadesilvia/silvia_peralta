import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'silvia-peralta';

  activeSection = 1;

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  fullPageScroll(e: HTMLElement, i) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document,
    });

    this.activeSection = i;
  }
}
