import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommentService {

	subject: Subject<number> = new Subject<number>()

	comments = [];
	author :string;
	comment :string;

	submitComment(thisAuthor, thisComment, comments) {
		this.comments = comments;
		this.comments.push({author: thisAuthor, comment: thisComment});
		console.log(this.comments);
	}

	deleteComment(id, comments) {
		this.comments = comments;
		this.comments.splice(id,1);
		console.log(this.comments);
	}

	editComment(id, comments) {
		this.comments = comments;
		this.author = this.comments[id].author;
		this.comment = this.comments[id].comment;
		this.deleteComment(id, comments);
		console.log(id);
	}
}
