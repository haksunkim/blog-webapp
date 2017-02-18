import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'my-app',
  template: `<div class="container"><h1>Hello {{name}}</h1></div>`,
})
export class AppComponent  {
  name = 'Angular';
  blogTitle: string = "Haksun Kim";

  constructor (private titleService: Title) {
    titleService.setTitle(this.blogTitle);
  }
}
