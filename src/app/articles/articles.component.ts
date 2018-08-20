import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article.models';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private router: Router, private articleService: ArticleService){}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  upvote(article) {
    article.upvotes++;
  }

  downvote(article) {
    article.upvotes--;
  }

  goToDetail(clickedArticle: Article) {
    this.router.navigate(['', clickedArticle.id]);
  };

}
