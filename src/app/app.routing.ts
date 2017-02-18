import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";

const routes: Routes = [
    { path: "blog", component: BlogComponent },
    { path: "**", redirectTo: "blog" }
]

export const routing = RouterModule.forRoot(routes);
