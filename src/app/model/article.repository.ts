import { Injectable } from "@angular/core";
import { Article } from "./article.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ArticleRepository {
  private articles: Article[] = [];

  constructor(private datasource: RestDataSource) {
    datasource.getArticles().subscribe(data => this.articles = data);
  }

  getArticles() : Article[] {
    return this.articles;
  }

  getArticle(id: number) : Article {
    return this.articles.find(a => a.id == id);
  }
}
