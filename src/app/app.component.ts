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

  author :string;
  comment :string;

  submitComment(thisAuthor, thisComment) {
  	this.comments.push({author: thisAuthor, comment: thisComment});
  	console.log(this.comments);
  }

  deleteComment(id) {
  	console.log(id);
  	this.comments.splice(id,1);
  	console.log(this.comments);
  }

  editComment(id) {
  	this.author = this.comments[id].author;
  	this.comment = this.comments[id].comment;
  	this.deleteComment(id);
  	console.log(id);
  }
}
