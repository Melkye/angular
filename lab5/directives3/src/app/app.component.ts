import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<div>
    <p valuesize [selectedSize]="fontSize" [defaultSize]="'14px'">
      Hello Angular
    </p>
    <p>Angular представляє модульну архітектуру додатку</p>
    <p valueSize selectedSize="fontSize">Змінний розмір шрифту</p>
    <input type="text" [(ngModel)]="fontSize" placeholder="Enter font size" />
  </div>`,
})
export class AppComponent {
  fontSize = '';
}
