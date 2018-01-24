import { Component } from '@angular/core';
import { CommentService } from './comment/comment.service'

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

  constructor( private commentService :CommentService) { }

  submitComment(thisAuthor, thisComment) {
  	this.commentService.submitComment(thisAuthor, thisComment, this.comments);
  }

  deleteComment(id) {
  	this.commentService.deleteComment(id, this.comments);
  }

  editComment(id) {
  	this.commentService.editComment(id, this.comments)
  }
}
