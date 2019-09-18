import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http-service.service";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-home",
  templateUrl: "./product-home.component.html",
  styleUrls: ["./product-home.component.css"]
})
export class ProductHomeComponent implements OnInit {
  products: Product[];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
