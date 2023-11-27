import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <label>Введіть ім'я:</label>
    <input [(ngModel)]="name" placeholder="name" />
    <h1>Ласкаво просимо {{ name }}!</h1>
    <h2>Hello Angular</h2>
    <p>Angular 16 представляє модульну архітектуру додатку</p>
    <child-comp></child-comp>
    <p>Hello {{ name }}</p>`,
  styles: [
    `
      h2,
      p {
        color: #333;
      }
    `,
  ],
})
export class AppComponent {
  name = 'Петро';
}
