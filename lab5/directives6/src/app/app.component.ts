import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<p *OtherIf="condition" class="Otherif a">
      (A) Condition is false.
    </p>
    <p *OtherIf="!condition" class="Otherif b">
      (B) Although the condition is true, this paragraph is displayed.
    </p>
    <button (click)="toggle()">Toggle</button>
    <p>Condition: {{ condition }}</p>`,
})
export class AppComponent {
  condition: boolean = false;
  toggle() {
    this.condition = !this.condition;
  }
}
