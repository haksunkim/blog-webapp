import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from "./model/model.module";
import { RouterModule } from "@angular/router";
import { BlogModule } from "./blog/blog.module";

import { AppComponent }  from './app.component';
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";
import { routing } from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, ModelModule, routing, BlogModule ],
  declarations: [ AppComponent, HeaderComponent, SidebarComponent ],
  bootstrap:    [ AppComponent, HeaderComponent, SidebarComponent ]
})
export class AppModule { }
