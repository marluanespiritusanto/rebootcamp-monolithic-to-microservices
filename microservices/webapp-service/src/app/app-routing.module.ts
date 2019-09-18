import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductHomeComponent } from "./pages/product-home/product-home.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { ProductAddComponent } from "./pages/product-add/product-add.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";

const routes: Routes = [
  { path: "", component: ProductHomeComponent },
  { path: "detail/:id", component: ProductDetailComponent },
  { path: "add", component: ProductAddComponent },
  { path: "not-found", component: ProductHomeComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
