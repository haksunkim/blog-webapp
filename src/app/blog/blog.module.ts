import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { BrowserModule } from "@angular/platform-browser";
import { TruncatePipe } from "./pipes/truncate.pipe";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ BlogComponent, TruncatePipe ],
  exports: [ BlogComponent ]
})
export class BlogModule {}
