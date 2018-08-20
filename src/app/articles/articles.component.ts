import { Component } from '@angular/core';
import { articleList } from '../models/articleList.models';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  articles = articleList;
  constructor() { }

  upvote(article) {
    article.upvotes++;
  }

  downvote(article) {
    article.upvotes--;
  }
}
