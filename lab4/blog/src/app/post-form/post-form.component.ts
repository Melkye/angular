import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  sub: Subscription | undefined;
  title = '';
  text = '';
  date1!: Date;

  myDate$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  ngOnInit(): void {
    this.sub = this.myDate$.subscribe(date => {
      this.date1 = date;
    });
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        date: this.date1,
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
}
