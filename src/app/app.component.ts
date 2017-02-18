import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { StaticContent } from "./model/staticContent.model";

@Component({
  selector: 'my-app',
  template: `<div class="container-fluid">
    <app-header></app-header>
  </div>
  <div class="container-fluid" style="background-color:#efefef;">
    <div class="container" style="background-color:#ffffff;">
      <div class="row">
        <div class="col-12 col-lg-9">
          <router-outlet>Content placeholder</router-outlet>
        </div>
        <div class="col-12 col-lg-3">
          <app-sidebar></app-sidebar>
        </div>
      </div>
    </div>
  </div>`,
})
export class AppComponent  {

  constructor (private titleService: Title, private staticContent: StaticContent) {
    // this sets title using title service and static content service
    titleService.setTitle(staticContent.blogTitle);
  }
}
