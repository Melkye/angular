import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
  date?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  search = '';
  title = 'Blog';
  posts: Post[] = [
    {
      title: 'Вивчаю компоненти',
      text: 'Створюю проект "Блог"',
      id: 1,
      date: new Date(),
    },
    {
      title: 'Вивчаю директиви',
      text: 'Все ще створюю "Блог"',
      id: 2,
      date: new Date(),
    },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }

  deletePost(id: number) {
    console.log(id);
    console.log(id !== 1);
    console.log(undefined === undefined);

    this.posts = this.posts.filter(p => p.id !== id);
  }
}
