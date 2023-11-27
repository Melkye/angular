import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <child-comp [userName]="name" [userAge]="age"></child-comp>
    <input type="number" [(ngModel)]="age" />`,
})
export class AppComponent {
  name: string = 'abuba';
  age: number = 24;
}
