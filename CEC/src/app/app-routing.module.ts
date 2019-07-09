import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { DetailsComponent } from "./details/details.component";
import { EmptyPageComponent } from "./empty-page/empty-page.component";
import { APP_BASE_HREF } from "@angular/common";

const routes: Routes = [
  { path: "", component: SearchComponent },
  { path: "cec/details/:username", component: DetailsComponent },
  { path: "**", component: EmptyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "" }]
})
export class AppRoutingModule {}
