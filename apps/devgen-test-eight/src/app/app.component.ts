import { Component } from '@angular/core';

@Component({
  selector: 'devgen-test-eight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'devgen-test-eight';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
