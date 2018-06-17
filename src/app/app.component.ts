import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    let uuid = UUID.UUID();
    sessionStorage.setItem('session-id', uuid);
  }
}
