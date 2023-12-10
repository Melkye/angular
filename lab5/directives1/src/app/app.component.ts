import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div [ngClass]="{ verdanaFont: isVerdana }">
    <h1>Hello Angular</h1>
    <p [ngClass]="{ segoePrintFont: isSegoe }">
      Angular представляє модульну архітектуру додатку
    </p>
  </div>`,
  styles: [
    `
      .verdanaFont {
        font-size: 13px;
        font-family: Verdana;
      }
      .segoePrintFont {
        font-size: 14px;
        font-family: 'Segoe Print';
      }
    `,
  ],
})
export class AppComponent {
  isVerdana = true;
  isSegoe = true;
}
