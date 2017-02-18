import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { StaticContent } from "./model/staticContent.model";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  {
  name = 'Angular';

  constructor (private titleService: Title, private staticContent: StaticContent) {
    // this sets title using title service and static content service
    titleService.setTitle(staticContent.blogTitle);
  }
}
