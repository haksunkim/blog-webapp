import { Component } from "@angular/core";
import { StaticContent } from "./model/staticContent.model";

@Component({
  selector: "app-header",
  moduleId: module.id,
  templateUrl: "header.component.html"
})
export class HeaderComponent {
  public blogTitle: string;
  public navHeader: string;

  constructor(staticContent: StaticContent) {
    this.blogTitle = staticContent.blogTitle;
    this.navHome = staticContent.navbar.home;
  }
}
