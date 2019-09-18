import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { ProductAddComponent } from "./pages/product-add/product-add.component";
import { ProductHomeComponent } from "./pages/product-home/product-home.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductHomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
