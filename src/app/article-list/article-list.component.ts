import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';
import { ArticleService } from '../article.service';
import { SharedService } from '../shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.titleService.setTitle(` ${this.sharedService.blogTitle}`);  
    this.getArticles();
        
  
  }

  getArticles(): void{
    this.articleService.getArticles().subscribe(articles => (this.articles = articles));
  }
}

