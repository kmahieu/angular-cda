import { Component } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getAllArticles().subscribe((result) => {
      this.articles = result;
    
      console.log(result);
    })
  }

}
