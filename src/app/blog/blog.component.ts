import { Component } from "@angular/core";
import { Article } from "../model/article.model";
import { ArticleRepository } from "../model/article.repository";

@Component({
  moduleId: module.id,
  templateUrl: "blog.component.html"
})
export class BlogComponent {

  constructor(private articleRepository: ArticleRepository) {}

  getArticles() : Article[] {
    return this.articleRepository.getArticles();
  }
}
