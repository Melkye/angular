import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div>
      <p bold>Вивчаю директиви</p>
      <p>Створення атрибутивних директив</p>
    </div>
    <div>
      <p italic>Вивчаю директиви</p>
      <p>Створення атрибутивних директив</p>
    </div>
    <div>
      <p mousebold>Робота з декоратором &#64;HostListener</p>
      <p>Реагування на курсор миші</p>
    </div>
    <div>
      <p mouseitalic>Робота з декоратором &#64;HostListener</p>
      <p>Реагування на покажчик миші при допомозі &#64;HostBinding</p>
    </div>
    <div>
      <p hostmousebold>Робота з декоратором &#64;HostListener</p>
      <p>Реагування на покажчик миші при допомозі &#64;HostBinding</p>
    </div>`,
})
export class AppComponent {
  title = 'directives2';
}
