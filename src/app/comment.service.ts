import { Injectable } from '@angular/core';
import { COMMENTS } from './mock-comments';

@Injectable()
export class CommentService {

  constructor() { }

  getComments() {
    return COMMENTS;
  }
}
