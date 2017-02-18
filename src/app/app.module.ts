import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from "./model/model.module";

import { AppComponent }  from './app.component';
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
  imports:      [ BrowserModule, ModelModule ],
  declarations: [ AppComponent, HeaderComponent, SidebarComponent ],
  bootstrap:    [ AppComponent, HeaderComponent, SidebarComponent ]
})
export class AppModule { }
