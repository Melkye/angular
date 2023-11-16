import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-app',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  // templateUrl: './app.component.html',
  template: `<label>Введіть назву:</label>
    <input [(ngModel)]="name" placeholder="name" />
    <h1>Ласкаво просимо {{ name }}!</h1>`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
}
