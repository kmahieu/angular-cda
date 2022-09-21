import { Injectable, ɵresetJitOptions } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  constructor(private http: HttpClient) { }

  getAllArticles() {
    // return this.http.get<Response>(API_URL + 'publication');
    return this.http.get<Article[]>("http://localhost:5000/articles/");
  }

  getArticleById(artId){
    return this.http.get<Article>("http://localhost:5000/article/" + artId);
    // return this.http.get<Response>(API_URL + 'publication/' + pubId);
  }

  createArticle(){
    return this.http.get<Article>("http://localhost:5000/article/");
    // return this.http.get<Response>(API_URL + 'publication/' + pubId);
  }

  getArticlesByCategorieId(artId){
    return this.http.get<Article[]>("http://localhost:5000/article/cat/" + artId);
    // return this.http.get<Response>(API_URL + 'publication/' + pubId);
  }

  deleteArticle(artId) {
    return this.http.delete("http://localhost:5000/article/" + artId);
  }

}