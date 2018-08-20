import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../models/comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentService]
})
export class CommentsComponent implements OnInit {

  comments: Comment[];

  constructor(private router: Router, private commentService: CommentService){}

  ngOnInit() {
    this.comments = this.commentService.getComments();
    console.log(this.comments);
    
  }

}
