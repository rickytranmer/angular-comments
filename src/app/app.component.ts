import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
      {author: 'Bob', comment: 'first comment!'},
      {author: 'Tim', comment: 'nice work!'},
      {author: 'Sue', comment: 'I would also like to congratulate you!'}
  ];

  submitComment(thisAuthor, thisComment) {
  	this.comments.push({author: thisAuthor, comment: thisComment});
  	console.log(this.comments);
  }

  deleteComment(id) {
  	console.log(id);
  }
}
