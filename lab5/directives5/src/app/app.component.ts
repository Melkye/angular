import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<label>Введіть a: </label>
    <input type="number" [(ngModel)]="a" />
    <br />
    <label>Введіть b: </label>
    <input type="number" [(ngModel)]="b" />
    <hr />
    <div *sum="let result; from: a; and: b">Сума = {{ result }}</div>`,
})
export class AppComponent {
  a = 20;
  b = 30;
}
