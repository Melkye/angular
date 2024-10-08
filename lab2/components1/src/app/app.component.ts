import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <label>Введіть ім'я:</label>
    <input [(ngModel)]="name" placeholder="name" />
    <h1>Ласкаво просимо {{ name }}!</h1>
    <h2>Hello Angular</h2>
    <p>Angular 16 представляє модульну архітектуру додатку</p>
    <child-comp
      ><h2>Ласкаво просимо {{ name }}!</h2></child-comp
    >
    <p>Hello {{ name }}</p>
    <child-comp [userName]="name2" [userAge]="age"></child-comp>
    <input type="text" [(ngModel)]="name2" />
  `,
  styles: [
    `
      h3 {
        color: navy;
      }
      h2,
      p {
        color: navy;
      }
    `,
  ],
})
export class AppComponent {
  name = 'Abuba';
  name2: string = 'Abuba2';
  age: number = 99;
}
