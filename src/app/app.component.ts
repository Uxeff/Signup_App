import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'register', url: '/register/', icon: 'mail' },
    { title: 'login', url: '/login/', icon: 'paper-plane' },
  ];
  constructor() {}
}
